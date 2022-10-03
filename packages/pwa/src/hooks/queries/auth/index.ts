import { useMutation, useQuery } from 'react-query'
import { AuthPayload, AuthService } from 'services/auth'

export function useQueryGet(email: string) {
  return useQuery('get', () => get(email))
}

export function useMutationAuth() {
  return useMutation((payload: AuthPayload) => auth(payload))
}

const get = async (email: string) => {
  const response = await AuthService.get(email)

  return response.data
}

const auth = async (payload: AuthPayload) => {
  const response = await AuthService.auth(payload)

  return response.data
}
