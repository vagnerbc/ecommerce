import { all } from 'redux-saga/effects'

import * as clientSlice from './client'

export type State = {
  client: clientSlice.State
}

export const reducer = {
  client: clientSlice.reducer
}

export const actions = Object.freeze({
  client: clientSlice.actions
})

export const selectors = Object.freeze({
  client: clientSlice.selectors
})

export const sagas = function* () {
  yield all([...clientSlice.sagas])
}
