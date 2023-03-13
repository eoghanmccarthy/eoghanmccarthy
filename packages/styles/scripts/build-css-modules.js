const fs = require('fs')
const path = require('path')
const allColorScales = require('../src/colors/index.js')

const outputDir = './colors'

let cssVariables = '<h2>Colors</h2>'
let cssImports = ''

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const selector = ':root'
  const scaleAssCssProperties = Object.entries(scale)
    .map(([name, value]) => {
      const cssVariable = `--color-${colorScaleName}-${name}: ${value};`
      cssVariables = cssVariables + `${cssVariable}<br />`
      return `  ${cssVariable}`
    })
    .join('\n')
  const scaleAsCssFile = `${selector} {\n${scaleAssCssProperties}\n}`
  const cssImport = `@import "./colors/${colorScaleName}.css";\n`
  cssImports = cssImports + cssImport
  fs.writeFileSync(path.join(outputDir, colorScaleName + '.css'), scaleAsCssFile)
})

fs.writeFileSync(path.join('.', 'colors.css'), cssImports)
fs.writeFileSync(path.join('.', 'COLORS.md'), '<h1>Styles</h1>' + cssVariables)
