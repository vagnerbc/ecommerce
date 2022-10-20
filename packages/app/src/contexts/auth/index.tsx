/* eslint-disable no-console */
import { useNavigation } from '@react-navigation/native'
import { useMutationAuth } from 'hooks/queries/auth'
import { User } from 'models/user'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthPayload } from 'services/auth'

export type ContextType = {
  user: any
  logged: boolean
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

  const navigation = useNavigation()

  useEffect(() => {
    const isLogged = localStorage.getItem('access_token')
    setLogged(!!isLogged)
  }, [])

  const mutateAuth = useMutationAuth()

  const logout = () => {
    setLogged(false)
    localStorage.clear()
    navigation.navigate('Login')
  }

  const login = async (payload: AuthPayload) => {
    console.log('AuthProvider: Obtendo o token')

    const { user, token } = await mutateAuth.mutateAsync(payload)

    console.log('AuthProvider: setLogged(true)')

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('access_token', token)
    setUser(user)
    setLogged(true)
  }

  return (
    <Context.Provider value={{ logged, login, logout, user }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  return useContext(Context)
}
