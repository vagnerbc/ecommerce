import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeLatest } from 'redux-saga/effects'

import { actions } from './slice'

export const sagas = [takeLatest(actions.get.type, getSaga)]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* getSaga(action: PayloadAction<boolean>) {
  try {
    yield put(actions.getSuccess([]))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    yield put(actions.getFailure())
  }
}
