import { ThemeProvider } from '@ecommerce/design-system'
import { AuthProvider } from 'contexts/auth'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { RouteGuard } from './route-guard'

import '@ecommerce/design-system/src/styles/index.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

const PagesWrapper = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouteGuard>
            <AnyComponent {...pageProps} />
          </RouteGuard>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default PagesWrapper
