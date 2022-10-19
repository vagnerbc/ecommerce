import { User } from '@sentry/nextjs'
import { AxiosResponse } from 'axios'
import { axiosInstance } from 'services'

export type AuthPayload = {
  email: string
  password: string
}

export type AuthResponse = {
  user: User
  token: string
}

export const AuthService = {
  auth: ({
    email,
    password
  }: AuthPayload): Promise<AxiosResponse<AuthResponse>> => {
    return axiosInstance.post('/auth', {
      email,
      password
    })
  },
  get: (email: string) => {
    return axiosInstance.get('/auth', { params: email })
  }
}
