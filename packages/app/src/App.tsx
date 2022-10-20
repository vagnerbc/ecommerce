import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes } from 'routes'
import { theme } from 'theme'

const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
