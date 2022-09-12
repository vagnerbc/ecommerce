const path = require('path')
const { exec } = require('child_process')

const TYPES_DEV_PATH = path.join(__dirname, '../theming.types.d.ts')

const TO_DEV_PATH = path.join(
  __dirname,
  '../../node_modules/@chakra-ui/styled-system/dist/declarations/src/'
)

const productionMonorepoCommand =
  'cp ./src/theming.types.d.ts ../../@chakra-ui/styled-system/dist/declarations/src/'

const productionCommand =
  'cp ./src/theming.types.d.ts ../../../@chakra-ui/styled-system/dist/declarations/src/'

const developCommand = `cp ${TYPES_DEV_PATH} ${TO_DEV_PATH}`

const installTheme = function () {
  exec(productionMonorepoCommand)
  exec(productionCommand)
  exec(developCommand)
}

installTheme()
