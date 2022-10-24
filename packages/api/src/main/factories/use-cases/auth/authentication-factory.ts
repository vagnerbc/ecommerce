import { AuthenticateDB } from '../../../../data/use-cases/auth/authenticate'
import { Authenticate } from '../../../../domain/use-cases/auth/authenticate'
import { UserPrismaRepository } from '../../../../infra/db/user/prisma-repository'
import { JwtGenerator } from '../../../../infra/token/jwt-generator'

export const makeAuthenticationUseCase = (): Authenticate => {
  const userRepository = new UserPrismaRepository()
  const jwtGenerator = new JwtGenerator()
  const authenticateUseCase = new AuthenticateDB(userRepository, jwtGenerator)
  return authenticateUseCase
}
