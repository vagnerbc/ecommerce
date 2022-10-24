import { AxiosResponse } from 'axios'
import { User } from 'models/user'
import { axiosInstance } from 'services'

export type AuthPayload = {
  email: string
  password: string
}

export type AuthResponse = {
  user: User
  token: string
}

export type AuthError = {
  error: string
}

export const AuthService = {
  auth: async ({
    email,
    password
  }: AuthPayload): Promise<AxiosResponse<AuthResponse>> => {
    return await axiosInstance.post('/auth', {
      email,
      password
    })
  },
  get: async (email: string) => {
    return await axiosInstance.get('/auth', { params: email })
  }
}
