import { ResetPassword } from 'api/src/domain/use-cases/auth/reset-password'
import { Request, Response } from 'express'

export class ResetPasswordController {
  constructor(private readonly resetPasswordUseCase: ResetPassword) {}

  async handle(req: Request, res: Response) {
    const { email, token, password } = req.body

    try {
      await this.resetPasswordUseCase.exec(email, token, password)

      return res.status(200).send()
    } catch (error: any) {
      return res.status(400).send({ error: error.message })
    }
  }
}
