#!/usr/bin/env node
import fs from 'fs-extra'
import { globby } from 'globby'
import path from 'path'

const inputDirs = process.argv.slice(2)
if (inputDirs.length === 0) {
  console.error(
    'Usage: node codemods/emotion-to-scss.mjs <src/features> [<src/app> ...]'
  )
  process.exit(1)
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

const styleRules = [
  { find: /\$\{colors\.(\w+)\}/g, replace: 'var(--color-$1)' },
  { find: /colors\.(\w+)/g, replace: 'var(--color-$1)' },
  { find: /\$\{mq\(\)\.(\w+)\}/g, replace: "@include media('<$1')" },
  {
    find: /\$\{(\w+)\}/g,
    replace: (_, name) => `@include ${toKebabCase(name)};`,
  },
]

function applyStyleRules(input) {
  for (const { find, replace } of styleRules) {
    input = input.replace(find, replace)
  }
  return input
}

const tsxRules = [
  { find: /: JSX\.Element/g, replace: '' },
  { find: /DatoCms(\w+) \{/g, replace: '$1Record {' },
  { find: /id: originalId/g, replace: 'id' },
  { find: /graphql`/g, replace: 'gql`' },
  {
    find: /import \{ graphql \} from 'gatsby'/g,
    replace: "import gql from 'graphql-tag'",
  },
  { find: /css=\{/g, replace: 'className={' },
  { find: /ComponentPropsWith(out*)Ref/g, replace: 'ComponentProps' },
  {
    find: /interface Props extends (ComponentProps<'\w+'>) \{/g,
    replace: 'type Props = $1 & {',
  },
  { find: /export default \w+/g, replace: '' },
  { find: /\n\s{0}const/g, replace: '\nexport const' },
  {
    find: /import\s+\{\s*css\s*\}\s+from\s+['"]@emotion\/react['"](;)?\n?/g,
    replace: '',
  },
  {
    find: /^\s*import\s+\{[^}]+\}\s+from\s+['"][^'"]*theme[^'"]*['"]\s*;?\s*$/gm,
    replace: '',
  },
  {
    find: /^\s*import\s+[^'"]+\s+from\s+['"][^'"]*theme[^'"]*['"]\s*;?\s*$/gm,
    replace: '',
  },
  {
    find: /\n{3,}/g,
    replace: '\n\n',
  },
]

function applyTsxRules(content) {
  for (const { find, replace } of tsxRules) {
    content = content.replace(find, replace)
  }
  return content
}

function convertMediaQueries(input) {
  return input.replace(
    /\$\{mq\(\)\.(\w+)\}/g,
    (_, bp) => `@include media('<${bp}')`
  )
}

function extractStaticBlocks(content) {
  const pattern = /(\w+):\s*css`([^`]*)`/g
  const matches = [...content.matchAll(pattern)]
  return matches.map(([_, name, rules]) => ({
    name,
    rules: applyStyleRules(convertMediaQueries(rules)),
  }))
}

function extractConditionalBlocks(content) {
  const pattern =
    /\$\{(!?)([\w.]+)\s*(?:===\s*['"]([^'"]+)['"])?\s*&&\s*css`([\s\S]*?)`\}/g
  const matches = [...content.matchAll(pattern)]

  return matches.map(([full, negation, propPath, value, rules], i) => {
    const rawProp = propPath.split('.').pop()
    const prop = toKebabCase(rawProp)
    const placeholder = `__COND_PLACEHOLDER_${i}__`
    const attrValue = value ? value : negation ? 'false' : 'true'

    return {
      prop,
      value: attrValue,
      rules: applyStyleRules(convertMediaQueries(rules)),
      placeholder,
      original: full,
      jsx: `data-${prop}={${negation ? '!' : ''}${propPath}}`,
    }
  })
}

function extractTernaryInterpolations(content) {
  const pattern =
    /(\w[\w-]*):\s*\$\{([\w.]+)\s*===\s*['"](\w+)['"]\s*\?\s*(.+?)\s*:\s*([\w.]+)\s*===\s*['"](\w+)['"]\s*&&\s*(.+?)\}/g
  const matches = [...content.matchAll(pattern)]
  return matches.map(
    ([full, propertyName, p1, v1, r1, p2, v2, r2], i) => {
      const prop = toKebabCase(p1.split('.').pop())
      const placeholder = `__TERN_PLACEHOLDER_${i}__`
      return {
        name: propertyName,
        prop,
        variants: [
          { value: v1, rules: applyStyleRules(r1) },
          { value: v2, rules: applyStyleRules(r2) },
        ],
        placeholder,
        original: full,
        jsx: `data-${prop}={${p1}}`,
      }
    }
  )
}

function extractFallbackBlocks(content) {
  const fallbackPattern = /\$\{([^}]+)&&\s*css`([\s\S]*?)`\}/g
  const matches = [...content.matchAll(fallbackPattern)]
  return matches.map(([full, condition, rules], i) => {
    const placeholder = `__FALLBACK_PLACEHOLDER_${i}__`
    return {
      condition: condition.trim(),
      rules: applyStyleRules(convertMediaQueries(rules)),
      placeholder,
      original: full,
    }
  })
}

function indent(str) {
  return str
    .split('\n')
    .map(line => '  ' + line.trim())
    .join('\n')
}

function stripStylesObject(content) {
  const start = content.indexOf('const styles = {')
  if (start === -1) return content

  let braceCount = 0
  let end = start

  const chars = content.split('')
  for (; end < chars.length; end++) {
    if (chars[end] === '{') braceCount++
    if (chars[end] === '}') braceCount--
    if (braceCount === 0 && chars[end] === '}') {
      end++
      while (/\s|,|;/.test(chars[end])) end++
      break
    }
  }

  return content.slice(0, start) + content.slice(end)
}

const files = await globby(inputDirs.map(dir => `${dir}/**/*.tsx`))

for (const file of files) {
  let rawContent = await fs.readFile(file, 'utf8')

  const conditionalBlocks = extractConditionalBlocks(rawContent)
  for (const { original, placeholder } of conditionalBlocks) {
    rawContent = rawContent.replace(original, placeholder)
  }

  const ternaryBlocks = extractTernaryInterpolations(rawContent)
  for (const { original, placeholder } of ternaryBlocks) {
    rawContent = rawContent.replace(original, placeholder)
  }

  const fallbackBlocks = extractFallbackBlocks(rawContent)
  for (const { original, placeholder } of fallbackBlocks) {
    rawContent = rawContent.replace(original, placeholder)
  }

  const staticBlocks = extractStaticBlocks(rawContent)
  if (
    !staticBlocks.length &&
    !conditionalBlocks.length &&
    !ternaryBlocks.length
  )
    continue

  const scssLines = ["@use '@/theme/mixins' as *;\n"]
  for (const { name, rules } of staticBlocks) {
    let block = `.${name} {\n${indent(rules)}\n}`

    for (const {
      placeholder,
      name: propName,
      prop,
      variants,
    } of ternaryBlocks) {
      const replacement = variants
        .map(
          v =>
            `[data-${prop}="${v.value}"] & {\n  ${propName}: ${v.rules};\n}`
        )
        .join('\n\n')
      block = block.replace(placeholder, replacement)
    }

    for (const {
      placeholder,
      prop,
      value,
      rules,
    } of conditionalBlocks) {
      const replacement = `\n[data-${prop}="${value}"] & {\n${indent(rules)}\n}`
      block = block.replace(placeholder, replacement)
    }

    for (const { placeholder, condition, rules } of fallbackBlocks) {
      const fallback = [
        ...condition.split('\n').map(line => `// ${line.trim()}`),
        ...rules.split('\n').map(line => `  // ${line.trim()}`),
      ].join('\n')
      block = block.replace(placeholder, fallback)
    }

    scssLines.push(block)
  }

  const scssOutput = scssLines.join('\n\n') + '\n'

  const scssPath = path.join(
    path.dirname(file),
    path.basename(file, '.tsx') + '.module.scss'
  )

  await fs.writeFile(scssPath, scssOutput, 'utf8')

  let transformedContent = stripStylesObject(rawContent)

  transformedContent = transformedContent.replace(
    /import [^\n]+\n(?!import)/,
    match =>
      `${match}import styles from './${path.basename(file, '.tsx')}.module.scss';\n`
  )

  transformedContent = applyTsxRules(transformedContent)

  const jsxProps = [...conditionalBlocks, ...ternaryBlocks].map(
    b => b.jsx
  )
  const uniqueProps = new Set(jsxProps)
  if (uniqueProps.size) {
    transformedContent = transformedContent.replace(
      /return\s*\(\s*(<\w+)([^>]*)(>)/,
      (_, startTag, attrs, endTag) => {
        const dataAttrs = [...uniqueProps].join(' ')
        return `return (
    ${startTag}${attrs} ${dataAttrs}${endTag}`
      }
    )
  }

  await fs.writeFile(file, transformedContent, 'utf8')

  console.log(`✔ Converted ${path.basename(file)}`)
  if (uniqueProps.size) {
    console.log(
      `   Add these to your TSX: ${[...uniqueProps].join(', ')}`
    )
  }
}
