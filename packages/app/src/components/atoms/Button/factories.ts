type SolidStylesOptions = {
  bg: string
  bgColorPressed: string
  textColor: string
}

export const getSolidStyles = (options: SolidStylesOptions) => {
  return {
    bg: options.bg,
    _text: {
      color: options.textColor
    },
    _icon: {
      color: options.textColor
    },
    _pressed: {
      bg: options.bgColorPressed
    },
    _disabled: {
      opacity: 0.64,
      bg: 'neutral.mediumlight',
      _text: { color: 'neutral.extradark' },
      _icon: {
        color: 'neutral.extradark'
      }
    }
  }
}

type OutlineStylesOptions = {
  borderWidth: string
  borderColor: string
  textColor: string
  bgColorPressed: string
  colorPressed: string
}

export const getOutlineStyles = (options: OutlineStylesOptions) => {
  return {
    bg: 'transparent',
    borderWidth: options.borderWidth,
    borderColor: options.textColor,
    _text: { color: options.textColor },
    _icon: { color: options.textColor },
    _pressed: {
      borderColor: options.bgColorPressed,
      bg: options.bgColorPressed,
      _text: { color: options.colorPressed },
      _icon: { color: options.colorPressed }
    },
    _disabled: {
      opacity: 0.64,
      borderColor: 'standard.white',
      bg: 'neutral.mediumlight',
      _text: { color: 'neutral.extradark' },
      _icon: { color: 'neutral.extradark' }
    }
  }
}

type GhostStylesOptions = {
  textColor: string
  colorPressed: string
}

export const getGhostStyles = (options: GhostStylesOptions) => {
  return {
    bg: 'transparent',
    _text: { color: options.textColor },
    _icon: { color: options.textColor },
    _pressed: {
      _text: { color: options.colorPressed },
      _icon: { color: options.colorPressed }
    },
    _disabled: {
      opacity: 0.64,
      _text: { color: 'neutral.extradark' },
      _icon: { color: 'neutral.extradark' }
    }
  }
}
