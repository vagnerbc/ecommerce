import { CreateUserDB } from '../../../../data/use-cases/user/create'
import { CreateUser } from '../../../../domain/use-cases/user/create'
import { Crypto } from '../../../../infra/cryptgraphy/crypto'
import { UserPrismaRepository } from '../../../../infra/db/user/prisma-repository'

export const makeCreateUserUseCase = (): CreateUser => {
  const userRepository = new UserPrismaRepository()
  const crypto = new Crypto()
  const usecase = new CreateUserDB(userRepository, crypto)
  return usecase
}
