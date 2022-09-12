import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { ThemeProvider } from '../../providers/ThemeProvider'

const wrapperProvider = () => {
  const wrapper = ({ children }: any) => {
    return <ThemeProvider>{children}</ThemeProvider>
  }

  return wrapper
}

const customRender = (component: React.ReactElement) => {
  const wrapper = wrapperProvider()

  return render(component, { wrapper })
}

export * from '@testing-library/react'
export { customRender as render, userEvent }
