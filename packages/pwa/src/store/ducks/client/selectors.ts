import { createSelector } from '@reduxjs/toolkit'

import { State } from '..'

export const getRoot = (state: State) => {
  return state.client
}

export const getClients = createSelector([getRoot], state => {
  return state.clients
})
