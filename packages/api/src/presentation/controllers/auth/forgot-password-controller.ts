import { Request, Response } from 'express'

import { ForgotPassword } from '../../../domain/use-cases/auth/forgot-password'

export class ForgotPasswordController {
  constructor(private readonly forgotPasswordUseCase: ForgotPassword) {}

  async handle(req: Request, res: Response) {
    const { email } = req.body

    try {
      await this.forgotPasswordUseCase.exec(email)

      return res.status(200).send()
    } catch (error: any) {
      return res.status(400).send({ error: error.message })
    }
  }
}
