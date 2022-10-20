import { getGhostStyles, getOutlineStyles, getSolidStyles } from './factories'

const variants = {
  'neutral-default': getSolidStyles({
    bg: 'neutral.default',
    textColor: 'standard.white',
    bgColorPressed: 'brand.primary-light'
  }),
  'brand-primary-solid': getSolidStyles({
    bg: 'brand.primary-default',
    textColor: 'standard.white',
    bgColorPressed: 'brand.primary-light'
  }),
  'brand-secondary-solid': getSolidStyles({
    bg: 'brand.secondary-default',
    textColor: 'standard.white',
    bgColorPressed: 'brand.primary-light'
  }),
  'default-outline': getOutlineStyles({
    borderWidth: '1px',
    borderColor: 'neutral.mediumdark',
    bgColorPressed: 'brand.primary-lightest',
    textColor: 'neutral.extradark',
    colorPressed: 'standard.white'
  }),
  'primary-outline': getOutlineStyles({
    borderWidth: '1px',
    borderColor: 'brand.primary-default',
    bgColorPressed: 'brand.primary-lightest',
    textColor: 'brand.primary-default',
    colorPressed: 'standard.white'
  }),
  'neutral-extradark-ghost': getGhostStyles({
    textColor: 'neutral.extradark',
    colorPressed: 'neutral.darkest'
  }),
  'neutral-extralight-solid': getSolidStyles({
    bg: 'neutral.extralight',
    textColor: 'neutral.extradark',
    bgColorPressed: 'neutral.mediumlight'
  }),
  'feedback-error-default': getSolidStyles({
    bg: 'feedback.error-default',
    textColor: 'standard.white',
    bgColorPressed: 'feedback.error-mediumlight'
  }),
  'standard-white-solid': getSolidStyles({
    bg: 'standard.white',
    textColor: 'neutral.extradark',
    bgColorPressed: 'neutral.lightest'
  }),
  'icon-default-outline': getOutlineStyles({
    borderWidth: '1px',
    borderColor: 'neutral.mediumdark',
    bgColorPressed: 'brand.primary-light',
    textColor: 'neutral.extradark',
    colorPressed: 'standard.white'
  }),
  'neutral-mediumdark-outline': getOutlineStyles({
    borderWidth: '1px',
    borderColor: 'neutral.mediumdark',
    bgColorPressed: 'brand.primary-lightest',
    textColor: 'neutral.extradark',
    colorPressed: 'standard.white'
  })
}

const buttonTheme = {
  baseStyle: {
    borderRadius: 'sm',
    transition: 'all 0.10s ease-in-out',
    _pressed: { boxShadow: 'none' }
  },
  sizes: {
    xs: {
      fontSize: 'xxs',
      _text: {
        fontSize: 'xxs'
      },
      px: 'quarck',
      py: 'quarck'
    },
    sm: {
      fontSize: 'xxs',
      _text: {
        fontSize: 'xxs'
      },
      px: 'xxxs',
      py: 'quarck'
    },
    md: {
      fontSize: 'xs',
      _text: {
        fontSize: 'xs'
      },
      px: 'xxxs',
      py: 'nano'
    },
    lg: {
      fontSize: 'sm',
      _text: {
        fontSize: 'sm'
      },
      px: 'xxxs',
      py: 'nano'
    },
    'lg-square': {
      fontSize: 'xs',
      _text: {
        fontSize: 'xs'
      },
      px: 'sm',
      py: 'sm'
    }
  },
  variants
}

export default buttonTheme
