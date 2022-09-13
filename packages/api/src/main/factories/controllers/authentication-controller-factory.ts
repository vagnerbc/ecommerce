import { AuthenticateController } from '../../../presentation/controllers/authenticate-controller'
import { makeAuthenticationUseCase } from '../use-cases/authentication-factory'

export const makeAuthenticationController = () => {
  const authenticationController = new AuthenticateController(
    makeAuthenticationUseCase()
  )
  return authenticationController
}
