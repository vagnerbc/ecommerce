import { ForgotPasswordController } from '../../../../presentation/controllers/auth/forgot-password-controller'
import { makeForgotPasswordUseCase } from '../../use-cases/auth/forgot-password-factory'

export const makeForgotPasswordController = () => {
  const forgotPasswordController = new ForgotPasswordController(
    makeForgotPasswordUseCase()
  )
  return forgotPasswordController
}
