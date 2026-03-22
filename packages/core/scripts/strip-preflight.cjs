const fs = require('fs')
const lines = fs.readFileSync('dist/styles.css', 'utf8').split('\n')

let inReset = false
let depth = 0
const filtered = []

for (const line of lines) {
  // Replace layer order declaration
  if (line.startsWith('@layer reset, base,')) {
    filtered.push(line.replace('reset, base,', 'base,'))
    continue
  }

  // Start of reset block
  if (line === '@layer reset{') {
    inReset = true
    depth = 1
    continue
  }

  if (inReset) {
    // Count braces
    for (const ch of line) {
      if (ch === '{') depth++
      if (ch === '}') depth--
    }
    if (depth <= 0) {
      inReset = false
    }
    continue
  }

  filtered.push(line)
}

fs.writeFileSync('dist/styles-no-preflight.css', filtered.join('\n'))
console.log('Generated dist/styles-no-preflight.css')
