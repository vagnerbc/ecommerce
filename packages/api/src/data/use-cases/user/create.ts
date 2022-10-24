import { CreateUser, Params } from 'api/src/domain/use-cases/user/create'
import * as Yup from 'yup'

import { Cryptography } from '../../protocols/cryptgraphy/cryptography'
import { UserRepository } from '../../protocols/db/user/repository'

export class CreateUserDB implements CreateUser {
  constructor(
    private readonly repository: UserRepository,
    private readonly criyptograph: Cryptography
  ) {}

  async exec(payload: Params): Promise<void> {
    const { name, email, password } = payload

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })

    await schema.validate({ name, email, password }, { abortEarly: false })

    const userCreated = await this.repository.findByEmail(email)

    if (userCreated) throw new Error('E-mail already exists.')

    const hash = await this.criyptograph.hash(password)

    await this.repository.create({
      name,
      email,
      password: hash
    })
  }
}
