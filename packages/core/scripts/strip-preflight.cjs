const fs = require('fs')
const css = fs.readFileSync('dist/styles.css', 'utf8')

// Tailwind v4 puts preflight in @layer base { ... }
// Remove the entire @layer base block to strip preflight
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

// Remove base layer (contains preflight/reset)
let result = css
const toRemove = layers.filter(l => l.name === 'base').reverse()
for (const layer of toRemove) {
  result = result.slice(0, layer.start) + result.slice(layer.end)
}

// Clean up extra blank lines
result = result.replace(/\n{3,}/g, '\n\n')

fs.writeFileSync('dist/styles-no-preflight.css', result.trim() + '\n')
console.log('Generated dist/styles-no-preflight.css')
