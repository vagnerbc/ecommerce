import { AuthenticateController } from '../../../../presentation/controllers/auth/authenticate-controller'
import { makeAuthenticationUseCase } from '../../use-cases/auth/authentication-factory'

export const makeAuthenticationController = () => {
  const authenticationController = new AuthenticateController(
    makeAuthenticationUseCase()
  )
  return authenticationController
}
