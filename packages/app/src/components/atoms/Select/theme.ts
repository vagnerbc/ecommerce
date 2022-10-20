const selectTheme = {
  baseStyle: {
    bgColor: 'standard.white',
    color: 'neutral.extradark',
    _disabled: {
      opacity: '80'
    },
    _hover: {
      bgColor: 'standard.black'
    },
    _item: {
      _text: {
        fontSize: 'xs'
      }
    },
    _selectedItem: {
      _text: {
        fontSize: 'xs',
        fontWeight: 'bold'
      }
    }
  },
  defaultProps: {
    optimized: true
  }
}

export default selectTheme
