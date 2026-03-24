const fs = require('fs')
const css = fs.readFileSync('dist/styles.css', 'utf8')

// Find positions of each @layer block
const layers = []
const layerRegex = /^@layer (\w+)\{/gm
let match
while ((match = layerRegex.exec(css)) !== null) {
  layers.push({ name: match[1], start: match.index })
}

// Find end of each layer block by counting braces
for (const layer of layers) {
  let depth = 0
  let foundStart = false
  for (let i = layer.start; i < css.length; i++) {
    if (css[i] === '{') {
      depth++
      foundStart = true
    }
    if (css[i] === '}') {
      depth--
      if (foundStart && depth === 0) {
        layer.end = i + 1
        break
      }
    }
  }
}

// Remove reset and base layers
const skipLayers = new Set(['reset', 'base'])
let result = css

// Remove from end to start so positions don't shift
const toRemove = layers.filter(l => skipLayers.has(l.name)).reverse()
for (const layer of toRemove) {
  result = result.slice(0, layer.start) + result.slice(layer.end)
}

// Fix layer order declaration
result = result.replace(
  /@layer reset, base, tokens, recipes, utilities;/,
  '@layer tokens, recipes, utilities;'
)

// Clean up extra blank lines
result = result.replace(/\n{3,}/g, '\n\n')

fs.writeFileSync('dist/styles-no-preflight.css', result.trim() + '\n')
console.log('Generated dist/styles-no-preflight.css')

// Generate layered version for Tailwind/other CSS framework coexistence
// Wraps all styles in @layer grannyshot { ... } so internal layers become
// grannyshot.tokens, grannyshot.recipes, grannyshot.utilities
// Layer 밖 스타일(Tailwind 등)이 항상 우선 → 소비자가 오버라이드 가능
const noPreflight = result.trim()
const layeredContent = noPreflight.replace(/^@layer [^;]+;\n*/m, '')
const layered = `@layer grannyshot {\n${layeredContent}\n}\n`
fs.writeFileSync('dist/styles-layered.css', layered)
console.log('Generated dist/styles-layered.css')
