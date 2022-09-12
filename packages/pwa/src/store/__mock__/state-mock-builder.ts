import { State } from 'store/ducks'

import { State as ClientState } from '../ducks/client/index'

import { ClientStateMockBuilder } from './client-state-mock-builder'

export class StateMockBuilder {
  private clientState = new ClientStateMockBuilder().build()

  withClientState(value: ClientState) {
    this.clientState = value
    return this
  }

  build(): State {
    return {
      client: this.clientState
    }
  }
}
