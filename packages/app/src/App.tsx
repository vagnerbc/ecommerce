import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes } from 'routes'

const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
