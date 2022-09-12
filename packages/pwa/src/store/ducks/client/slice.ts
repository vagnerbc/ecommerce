/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoadingStatus = 'pristine' | 'loading' | 'success' | 'failure'

export type State = {
  clients: any[]
  status: LoadingStatus
}

export const initialState: State = {
  clients: [],
  status: 'pristine'
}

const reducers = {
  get: (state: State, action: PayloadAction<boolean>) => {
    state.status = 'loading'
  },
  getSuccess: (state: State, action: PayloadAction<any[]>) => {
    state.clients = action.payload
    state.status = 'success'
  },
  getFailure: (state: State) => {
    state.status = 'failure'
  }
}

const client = createSlice({
  name: 'client',
  initialState,
  reducers
})

export const actions = client.actions
export const reducer = client.reducer
