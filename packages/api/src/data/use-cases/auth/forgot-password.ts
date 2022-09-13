/* eslint-disable no-useless-constructor */
import { ForgotPassword } from 'api/src/domain/use-cases/auth/forgot-password'

import { Cryptography } from '../../protocols/cryptgraphy/cryptography'
import { UserRepository } from '../../protocols/db/user/repository'
import { EmailSender } from '../../protocols/email/sender'

export class ForgotPasswordDB implements ForgotPassword {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly crypography: Cryptography,
    private readonly emailSender: EmailSender
  ) {}

  async exec(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) throw new Error("E-mail doesn't exists.")

    const token = await this.crypography.random(20)

    const now = new Date()
    now.setHours(now.getHours() + 1)

    await this.userRepository.update({
      ...user,
      password_reset_token: token,
      password_reset_expires: now
    })

    await this.emailSender.send({
      to: email,
      from: 'support@email.com',
      subject: 'Forgot Password',
      html: `<p>Do you forgot your password ? Don't worry, use this token ${token}`
    })
  }
}
