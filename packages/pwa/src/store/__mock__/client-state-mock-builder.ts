import { initialState, State } from '../ducks/client/index'

export class ClientStateMockBuilder {
  private clients: any[] = []

  withClients(value: any[]) {
    this.clients = value
    return this
  }

  build(): State {
    return {
      ...initialState,
      clients: this.clients
    }
  }
}
