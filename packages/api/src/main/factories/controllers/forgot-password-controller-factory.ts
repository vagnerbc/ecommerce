import { ForgotPasswordController } from '../../../presentation/controllers/reset-password-controller'
import { makeForgotPasswordUseCase } from '../use-cases/forgot-password-factory'

export const makeForgotPasswordController = () => {
  const forgotPasswordController = new ForgotPasswordController(
    makeForgotPasswordUseCase()
  )
  return forgotPasswordController
}
