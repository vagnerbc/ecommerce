import { ThemeProvider } from '@ecommerce/design-system'
import { AppProps } from 'next/app'

import '@ecommerce/design-system/src/styles/index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouteGuard } from './route-guard'
import { AuthProvider } from 'contexts/auth'

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
