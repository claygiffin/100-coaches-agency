#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { globby } from 'globby';
import { fileURLToPath } from 'url';

// Needed to resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = process.argv[2];

if (!inputDir) {
  console.error('Usage: node codemods/emotion-to-scss.mjs <src/components>');
  process.exit(1);
}

// Convert mq().m to @include media('<m')
function convertMediaQueries(input) {
  return input.replace(/\$\{mq\(\)\.(\w+)\}/g, (_, breakpoint) => {
    return `@include media('<${breakpoint}')`;
  });
}

function extractConditionalBlocks(content) {
  const pattern =
    /\$\{(\w+)\s*===\s*['"]([^'"]+)['"]\s*&&\s*css`([^`]+)`\}/g;
  const matches = [...content.matchAll(pattern)];

  return matches.map(([_, prop, value, rules]) => ({
    prop,
    value,
    rules: convertMediaQueries(rules),
  }));
}

function extractStaticBlocks(content) {
  const pattern = /(\w+):\s*css`([^`]+)`/g;
  const matches = [...content.matchAll(pattern)];

  return matches.map(([_, name, rules]) => ({
    name,
    rules: convertMediaQueries(rules),
  }));
}

function indent(str) {
  return str
    .split('\n')
    .map((line) => '  ' + line.trim())
    .join('\n');
}

const files = await globby(`${inputDir}/**/*.tsx`);

for (const file of files) {
  const content = await fs.readFile(file, 'utf8');

  const staticBlocks = extractStaticBlocks(content);
  const conditionalBlocks = extractConditionalBlocks(content);

  if (!staticBlocks.length && !conditionalBlocks.length) continue;

  const outLines = [];

  for (const { name, rules } of staticBlocks) {
    outLines.push(`.${name} {\n${indent(rules)}\n}`);
  }

  for (const { prop, value, rules } of conditionalBlocks) {
    outLines.push(`[data-${prop}="${value}"] & {\n${indent(rules)}\n}`);
  }

  const output = outLines.join('\n\n') + '\n';

  const outPath = path.join(
    path.dirname(file),
    path.basename(file, '.tsx') + '.module.scss'
  );

  await fs.writeFile(outPath, output, 'utf8');

  const uniqueProps = new Set(conditionalBlocks.map((b) => `data-${b.prop}`));

  console.log(`✔ Converted ${path.basename(file)}`);
  if (uniqueProps.size) {
    console.log(`   Add these to your TSX: ${[...uniqueProps].join(', ')}`);
  }
}
