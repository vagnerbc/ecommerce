type OutlineStylesOptions = {
  borderColorFocus: string
}

export const getOutlineStyles = (options: OutlineStylesOptions) => {
  return {
    borderWidth: '1px',
    borderRadius: '12px',
    _android: {
      borderColor: 'neutral.mediumlight'
    },
    _ios: {
      borderColor: 'neutral.mediumlight'
    },
    _focus: {
      borderWidth: '2px',
      _android: {
        borderColor: options.borderColorFocus
      },
      _ios: {
        borderColor: options.borderColorFocus
      }
    },
    _invalid: {
      borderWidth: '2px',
      _android: {
        borderColor: 'feedback.error-dark'
      },
      _ios: {
        borderColor: 'feedback.error-dark'
      }
    }
  }
}

type FilledStylesOptions = {
  borderColorFocus: string
}

export const getFilledStyles = (options: FilledStylesOptions) => {
  return {
    bg: 'neutral.extralight',
    borderRadius: 'sm',
    borderWidth: 'none',
    _focus: {
      borderWidth: '2px',
      bg: 'neutral.lightest',
      _android: {
        borderColor: options.borderColorFocus
      },
      _ios: {
        borderColor: options.borderColorFocus
      }
    },
    _invalid: {
      borderWidth: '2px',
      _android: {
        borderColor: 'feedback.error-dark'
      },
      _ios: {
        borderColor: 'feedback.error-dark'
      }
    },
    _disabled: {
      borderWidth: 'none'
    }
  }
}

type FlushedStylesOptions = {
  borderColorFocus: string
}

export const getFlushedStyles = (options: FlushedStylesOptions) => {
  return {
    bg: 'standard.white',
    borderWidth: 'none',
    borderRadius: 'none',
    borderBottomWidth: '1px',
    _focus: {
      borderBottomWidth: '2px',
      borderBottomColor: options.borderColorFocus
    },
    _invalid: {
      borderBottomWidth: '2px',
      borderBottomColor: 'feedback.error-dark'
    },
    _disabled: {
      bg: 'standard.white',
      _android: {
        borderColor: 'brand.extradark'
      },
      _ios: {
        borderColor: 'brand.extradark'
      }
    }
  }
}
