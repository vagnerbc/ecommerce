import PagesWrapper from 'components/template/pages-wrapper'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'store'

function MyApp(props: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PagesWrapper {...props} />
    </ReduxProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
