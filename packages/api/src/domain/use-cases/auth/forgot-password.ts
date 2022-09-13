export interface ForgotPassword {
  exec: (email: string) => Promise<void>
}
