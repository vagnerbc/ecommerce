export type Params = {
  name: string
  email: string
  password: string
}
export interface CreateUser {
  exec: (payload: Params) => Promise<void>
}
