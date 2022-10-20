import { getRoundStyles } from './factories'

const variants = {
  notify: {
    borderRadius: 'pill',
    _text: { color: 'standard.white', fontWeight: 'bold', fontSize: 'xxxs' },
    textAlign: 'center',
    bgColor: 'feedback.error-dark'
  },
  'round-neutral': getRoundStyles({
    bgColor: 'neutral.mediumlight',
    textColor: 'neutral.extradark',
    opacity: 0.64
  }),
  'round-neutral-disabled': getRoundStyles({
    bgColor: 'neutral.lightest',
    textColor: 'neutral.extradark',
    opacity: 0.64
  }),
  'round-support-primary-light': getRoundStyles({
    bgColor: 'support.primary-light',
    textColor: 'standard.white'
  }),
  'round-feedback-information-default': getRoundStyles({
    bgColor: 'feedback.information-default',
    textColor: 'standard.white'
  }),
  'round-support-tertiary-dark': getRoundStyles({
    bgColor: 'support.tertiary-dark',
    textColor: 'standard.white'
  }),
  'round-feedback-success-light': getRoundStyles({
    bgColor: 'feedback.success-light',
    textColor: 'standard.white'
  }),
  'support-tertiary-dark': {
    ...getRoundStyles({
      borderRadius: 'sm',
      textColor: 'standard.white',
      bgColor: 'support.tertiary-dark'
    })
  }
}

const badgeTheme = {
  sizes: {
    xxxs: {
      minWidth: 'xxxs',
      minHeight: 'xxxs'
    },
    xxs: {
      minWidth: 'xxs',
      minHeight: 'xxs'
    }
  },
  variants,
  defaultProps: {
    size: 'xxs',
    variant: 'notify'
  }
}

export default badgeTheme
