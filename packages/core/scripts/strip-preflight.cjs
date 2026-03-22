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
