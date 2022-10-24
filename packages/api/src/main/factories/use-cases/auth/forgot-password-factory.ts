import { ForgotPasswordDB } from '../../../../data/use-cases/auth/forgot-password'
import { ForgotPassword } from '../../../../domain/use-cases/auth/forgot-password'
import { Crypto } from '../../../../infra/cryptgraphy/crypto'
import { UserPrismaRepository } from '../../../../infra/db/user/prisma-repository'
import { Mailer } from '../../../../infra/email/mailer'

export const makeForgotPasswordUseCase = (): ForgotPassword => {
  const userRepository = new UserPrismaRepository()
  const crypto = new Crypto()
  const mailer = new Mailer()
  const forgotPasswordUseCase = new ForgotPasswordDB(
    userRepository,
    crypto,
    mailer
  )
  return forgotPasswordUseCase
}
