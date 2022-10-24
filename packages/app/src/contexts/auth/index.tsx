/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosError } from 'axios'
import { useMutationAuth } from 'hooks/queries/auth'
import { User } from 'models/user'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthError, AuthPayload } from 'services/auth'

export type ContextType = {
  user: any
  isLogged: boolean
  login: (payload: AuthPayload) => Promise<void>
  logout: () => void
  error: string
}

export const Context = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const isLogged = async () => {
      const accessToken = await AsyncStorage.getItem('access_token')
      console.log({ accessToken })
      setIsLogged(!!accessToken)
    }

    isLogged()
  }, [])

  const mutateAuth = useMutationAuth()

  const logout = async () => {
    setIsLogged(false)
    await AsyncStorage.clear()
  }

  const login = async (payload: AuthPayload) => {
    console.log('AuthProvider: Obtendo o token')

    try {
      const { user, token } = await mutateAuth.mutateAsync(payload)

      console.log('AuthProvider: setLogged(true)')

      await AsyncStorage.setItem('user', JSON.stringify(user))
      await AsyncStorage.setItem('access_token', token)
      setUser(user)
      setIsLogged(true)
    } catch (error) {
      const err = error as AxiosError<AuthError>
      console.log('AuthProvider: error', err.response.data.error)
      setError(err.response.data.error)
    }
  }

  return (
    <Context.Provider value={{ isLogged, login, logout, user, error }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  return useContext(Context)
}
