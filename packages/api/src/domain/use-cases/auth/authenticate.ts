export interface Authenticate {
  exec: (email: string, password: string) => Promise<Result>
}

export type Result = {
  user: {
    id: string
    name: string
    email: string
  }
  token: string
}
