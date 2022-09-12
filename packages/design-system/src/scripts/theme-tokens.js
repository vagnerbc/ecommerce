const { exec } = require('child_process')

const THEME_PATH = './src/theme/index.ts'
const GENERATED_TYPES_PATH =
  '../../node_modules/@chakra-ui/styled-system/dist/declarations/src/theming.types.d.ts'
const COPY_TO_PATH = './src/'

const generateThemeTokens = function () {
  exec(
    `chakra-cli tokens ${THEME_PATH} && cp ${GENERATED_TYPES_PATH} ${COPY_TO_PATH}`,
    error => {
      if (!error) {
        return
      }
      console.error(error)
    }
  )
}

generateThemeTokens()
