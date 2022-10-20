import { colors } from '../../../theme/colors'

import {
  getFilledStyles,
  getFlushedStyles,
  getOutlineStyles
} from './factories'

const variants = {
  'outline-brand-primary-default': getOutlineStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'outline-brand-secondary-default': getOutlineStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'filled-brand-primary-default': getFilledStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'filled-brand-secondary-default': getFilledStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'flushed-brand-primary-default': getFlushedStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'flushed-brand-secondary-default': getFlushedStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'quantity-picker-default': {
    bg: 'standard.white',
    borderWidth: '1px',
    borderRadius: 'sm',
    fontWeight: 'bold',
    _android: {
      color: 'brand.primary-default',
      borderColor: 'neutral.mediumlight',
      _input: {
        paddingX: 'xxxs',
        textAlign: 'center'
      }
    },
    _ios: {
      color: 'brand.primary-default',
      borderColor: 'neutral.mediumlight'
    },
    _focus: {
      borderWidth: '2px',
      _android: {
        borderColor: 'brand.primary-default'
      },
      _ios: {
        borderColor: 'brand.primary-default'
      }
    },
    _invalid: {
      borderWidth: '2px',
      _android: {
        color: 'feedback.error-dark',
        borderColor: 'feedback.error-dark'
      },
      _ios: {
        color: 'feedback.error-dark',
        borderColor: 'feedback.error-dark'
      }
    },
    _disabled: {
      borderWidth: '2px',
      color: 'neutral.extradark',
      opacity: 0.32
    }
  }
}

const inputTheme = {
  baseStyle: {
    _android: {
      color: 'neutral.darkest'
    },
    _ios: {
      color: 'neutral.darkest'
    },
    _input: {
      placeholderTextColor: colors.neutral.dark
    },
    _disabled: {
      bg: 'neutral.mediumlight',
      borderColor: 'neutral.extradark',
      opacity: 0.32
    }
  },
  sizes: {
    sm: {
      fontSize: 'xxs',
      _input: {
        paddingY: 'nano',
        paddingX: 'xxxs',
        fontSize: 'xxs',
        lineHeight: 'sm'
      }
    },
    md: {
      fontSize: 'xs',
      _input: {
        paddingY: '0.625em',
        paddingX: 'xxxs',
        fontSize: 'xs',
        lineHeight: 'sm'
      }
    },
    lg: {
      fontSize: 'sm',
      _input: {
        paddingY: '0.625em',
        paddingX: 'xxxs',
        fontSize: 'sm',
        lineHeight: 'lg'
      }
    }
  },
  variants
}

export default inputTheme
