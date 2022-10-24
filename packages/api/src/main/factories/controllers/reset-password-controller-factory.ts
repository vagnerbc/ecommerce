import { ResetPasswordController } from '../../../presentation/controllers/reset-password-controller'
import { makeResetPasswordUseCase } from '../use-cases/reset-password-factory'

export const makeResetPasswordController = () => {
  const resetPasswordController = new ResetPasswordController(
    makeResetPasswordUseCase()
  )
  return resetPasswordController
}
