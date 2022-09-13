/* eslint-disable no-useless-constructor */
import { ResetPassword } from 'api/src/domain/use-cases/auth/reset-password'

import { Cryptography } from '../../protocols/cryptgraphy/cryptography'
import { UserRepository } from '../../protocols/db/user/repository'

export class ResetPasswordDB implements ResetPassword {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly crypography: Cryptography
  ) {}

  async exec(email: string, token: string, password: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) throw new Error("E-mail doesn't exists.")

    if (
      (user.password_reset_expires &&
        user.password_reset_expires < new Date()) ||
      user.password_reset_token !== token
    )
      throw new Error('Token expired to reset password.')

    const hash = await this.crypography.hash(password)

    await this.userRepository.update({
      ...user,
      password: hash,
      password_reset_token: undefined,
      password_reset_expires: undefined
    })
  }
}
