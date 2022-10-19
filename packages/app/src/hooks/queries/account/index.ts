import { Account } from 'models/account'
import { useMutation, useQuery } from 'react-query'
import { AccountService } from 'services/account'

export function useQueryGetAll() {
  return useQuery('getAll', () => getAll())
}

export function useQueryGetById(id: string) {
  return useQuery('getById', () => getById(id))
}

export function useQueryGetByConsumer(consumerId: string) {
  return useQuery('getByConsumer', () => getByConsumer(consumerId))
}

export function useMutationCreate() {
  return useMutation((payload: Account) => create(payload))
}

const getAll = async () => {
  const response = await AccountService.getAll()

  return response.data
}

const getById = async (id: string) => {
  const response = await AccountService.getById(id)

  return response.data
}

const getByConsumer = async (consumerId: string) => {
  const response = await AccountService.getByConsumer(consumerId)

  return response.data
}

const create = async (payload: Account) => {
  const response = await AccountService.create(payload)

  return response.data
}
