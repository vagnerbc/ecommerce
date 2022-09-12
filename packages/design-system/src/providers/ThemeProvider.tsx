import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import { getTheme } from '../theme'

type ThemeProviderProps = React.FC<{ isSecondaryAccent?: boolean }>

export const ThemeProvider: ThemeProviderProps = ({
  children,
  isSecondaryAccent = false
}) => {
  const theme = getTheme(isSecondaryAccent)

  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  )
}
