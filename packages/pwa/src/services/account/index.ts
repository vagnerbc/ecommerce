import { Account } from 'models/account'
import { axiosInstance } from 'services'

export const AccountService = {
  create: (payload: Account) => {
    return axiosInstance.post('/account', payload)
  },
  updateStatus: (status: string) => {
    return axiosInstance.put('/account', { status })
  },
  getAll: () => {
    return axiosInstance.get('/account')
  },
  getById: (id: string) => {
    return axiosInstance.get('/account', { params: id })
  },
  getByConsumer: (consumerId: string) => {
    return axiosInstance.get('/account', { params: consumerId })
  }
}
