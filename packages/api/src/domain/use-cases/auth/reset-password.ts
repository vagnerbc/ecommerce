export interface ResetPassword {
  exec: (email: string, token: string, password: string) => Promise<void>
}
