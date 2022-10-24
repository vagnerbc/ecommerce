import { ResetPasswordDB } from '../../../../data/use-cases/auth/reset-password'
import { ResetPassword } from '../../../../domain/use-cases/auth/reset-password'
import { Crypto } from '../../../../infra/cryptgraphy/crypto'
import { UserPrismaRepository } from '../../../../infra/db/user/prisma-repository'

export const makeResetPasswordUseCase = (): ResetPassword => {
  const userRepository = new UserPrismaRepository()
  const crypto = new Crypto()
  const resetPasswordUseCase = new ResetPasswordDB(userRepository, crypto)
  return resetPasswordUseCase
}
