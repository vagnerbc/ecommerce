/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const STATIC_PATH = './src/styles/material-icons'

const generateIconTypes = function () {
  const relativePath = `${STATIC_PATH}/_codepoints.scss`

  const array = fs.readFileSync(relativePath).toString().split('\n')
  array.splice(0, 3) // remove first two elements
  console.log(array)
  array.splice(array.length - 4, 4) // remove last two elements

  const tokens = array
    .filter(line => line.length > 0)
    .map(line => line.split(':')[0].trim())

  const arrayString = tokens.join(',')

  const content = `const icons = [${arrayString}] as const \n\nexport type IconsName = typeof icons[number]`

  fs.writeFileSync('./src/types/icons.ts', content)
}

generateIconTypes()
