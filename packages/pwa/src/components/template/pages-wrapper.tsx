import { ThemeProvider } from '@ecommerce/design-system'
import { AppProps } from 'next/app'
import { memo } from 'react'

import '@ecommerce/design-system/src/styles/index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

const PagesWrapper = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AnyComponent {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default memo(PagesWrapper)
