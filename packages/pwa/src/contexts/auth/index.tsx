/* eslint-disable no-console */
import { User } from '@sentry/nextjs'
import { AxiosError } from 'axios'
import { useMutationAuth } from 'hooks/queries/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthError, AuthPayload } from 'services/auth'

export type ContextType = {
  user: any
  logged: boolean
  error: string
  login: (payload: AuthPayload) => Promise<void>
  logout: () => void
}

export const Context = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const isLogged = localStorage.getItem('access_token')
    setLogged(!!isLogged)
  }, [])

  const mutateAuth = useMutationAuth()

  const logout = () => {
    localStorage.clear()
    setUser(null)
    setLogged(false)
  }

  const login = async (payload: AuthPayload) => {
    console.log('AuthProvider: Obtendo o token')
    try {
      const { user, token } = await mutateAuth.mutateAsync(payload)

      console.log('AuthProvider: setLogged(true)')

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('access_token', token)
      setUser(user)
      setLogged(true)
    } catch (error) {
      const err = error as AxiosError<AuthError>
      console.log('AuthProvider: error', err.response?.data.error)
      setError(err.response?.data.error ?? '')
    }
  }

  return (
    <Context.Provider value={{ logged, login, logout, user, error }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  return useContext(Context)
}
