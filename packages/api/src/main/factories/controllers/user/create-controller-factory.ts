import { CreateUserController } from '../../../../presentation/controllers/user/create'
import { makeCreateUserUseCase } from '../../use-cases/user/create-factory'

export const makeCreateUserController = () => {
  const controller = new CreateUserController(makeCreateUserUseCase())
  return controller
}
