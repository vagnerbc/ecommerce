import { RFValue } from 'react-native-responsive-fontsize'

export const fonts = {
  body: 'Nunito-Regular',
  heading: 'Nunito-Regular, OpenSans-Regular'
}

export const fontSizes = {
  xxxs: RFValue(12),
  xxs: RFValue(14),
  xs: RFValue(16),
  sm: RFValue(20),
  md: RFValue(24),
  lg: RFValue(32),
  xl: RFValue(40),
  xxl: RFValue(48),
  xxxl: RFValue(64),
  display: RFValue(80)
}

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

export const lineHeights = {
  default: '1em', // 100%
  xs: '1.15em', // 115%
  sm: '1.2em', // 120%
  md: '1.33em', // 133%
  lg: '1.5em', // 150%
  xl: '1.7em', // 170%
  xxl: '2em' // 200%
}
