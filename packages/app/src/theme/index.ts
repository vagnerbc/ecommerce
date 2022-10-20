import { extendTheme } from 'native-base'

import * as border from './borders'
import { colors } from './colors'
import components from './components'
import { opacity } from './opacity'
import { shadows } from './shadows'
import { space } from './spacing'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  opacity,
  space,
  borderWidths: border.width,
  radii: border.radius,
  components,
  sizes: space
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  type ICustomTheme = CustomThemeType
}
