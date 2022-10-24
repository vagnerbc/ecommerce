import { Request, Response } from 'express'

import { CreateUser } from '../../../domain/use-cases/user/create'

export class CreateUserController {
  constructor(private readonly usecase: CreateUser) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body

    try {
      await this.usecase.exec({ name, email, password })

      return res.status(201).send()
    } catch (error: any) {
      return res.status(400).send({ error: error.message })
    }
  }
}
