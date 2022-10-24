/* eslint-disable no-useless-constructor */
import { Authenticate } from '../../../domain/use-cases/auth/authenticate'
import { UserRepository } from '../../protocols/db/user/repository'
import { TokenGenerator } from '../../protocols/token/generator'

export class AuthenticateDB implements Authenticate {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtGenerator: TokenGenerator
  ) {}

  async exec(email: string, password: string): Promise<Result> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) throw new Error("E-mail doesn't exists.")

    const isValidPassword = await user.comparePassword(password)

    if (!isValidPassword) throw new Error('Invalid password.')

    const token = this.jwtGenerator.generate({ id: user.id })

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    }
  }
}

export type Result = {
  user: {
    id: string
    name: string
    email: string
  }
  token: string
}
