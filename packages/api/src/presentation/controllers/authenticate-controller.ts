import { Request, Response } from 'express'

import { Authenticate } from '../../domain/use-cases/auth/authenticate'

export class AuthenticateController {
  constructor(private readonly authenticateUseCase: Authenticate) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const data = await this.authenticateUseCase.exec(email, password)

      return res.status(200).send(data)
    } catch (error: any) {
      return res.status(400).send({ error: error.message })
    }
  }
}
