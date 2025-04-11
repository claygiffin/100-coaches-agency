#!/usr/bin/env node
import fs from 'fs-extra'
import { globby } from 'globby'
import path from 'path'

const inputDir = process.argv[2]
if (!inputDir) {
  console.error(
    'Usage: node codemods/split-gql-from-component.mjs <src/components>'
  )
  process.exit(1)
}

const files = await globby(`${inputDir}/**/*.tsx`)

for (const file of files) {
  let raw = await fs.readFile(file, 'utf8')

  const gqlPattern =
    /export const (\w+)Fragment = gql`[\s\S]+?`[\s\S]*?(\$\{[^}]+\})?/g
  const matches = [...raw.matchAll(gqlPattern)]
  if (matches.length === 0) continue

  const interpolatedNames = new Set()
  for (const match of matches) {
    const interpolation = match[0].match(/\$\{(\w+Fragment)\}/g)
    interpolation?.forEach(i =>
      interpolatedNames.add(i.replace('${', '').replace('}', ''))
    )
  }

  // Find import lines like: import { FooFragment } from '@/features/whatever'
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g
  const groupedImports = {}
  raw = raw.replace(importRegex, (match, names, from) => {
    const kept = []
    const moved = []
    names.split(',').forEach(n => {
      const name = n.trim()
      if (interpolatedNames.has(name)) {
        if (!groupedImports[from]) groupedImports[from] = []
        groupedImports[from].push(name)
        moved.push(name)
      } else {
        kept.push(name)
      }
    })
    if (kept.length) {
      return `import { ${kept.join(', ')} } from '${from}'`
    }
    return ''
  })

  // Build imports for new file
  let gqlImports = "import { gql } from 'graphql-tag'\n"
  for (const [path, names] of Object.entries(groupedImports)) {
    gqlImports += `import { ${names.sort().join(', ')} } from '${path}'\n`
  }

  const fragments = matches.map(([full, name]) => {
    return `export const ${name}Fragment = gql\`${full.split('gql`')[1]}`
  })

  const gqlContent = gqlImports + '\n' + fragments.join('\n\n') + '\n'

  // Remove gql fragment blocks
  raw = raw.replace(gqlPattern, '').trimEnd()

  // Remove `import { gql } from 'graphql-tag'` if it exists
  raw = raw.replace(
    /^\s*import\s+\{\s*gql\s*\}\s+from\s+['"]graphql-tag['"];\s*/gm,
    ''
  )

  const baseName = path.basename(file, '.tsx')
  const gqlPath = path.join(path.dirname(file), `${baseName}.gql.ts`)
  await fs.writeFile(gqlPath, gqlContent, 'utf8')
  await fs.writeFile(file, raw, 'utf8')

  console.log(`✔ Split GraphQL fragments from ${path.basename(file)}`)
}
