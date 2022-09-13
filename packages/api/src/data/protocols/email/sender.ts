export interface EmailSender {
  send: (param: Param) => Promise<void>
}

export type Param = {
  to: string
  from: string
  subject: string
  html: string
}
