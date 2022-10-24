import { ResetPasswordController } from '../../../../presentation/controllers/auth/reset-password-controller'
import { makeResetPasswordUseCase } from '../../use-cases/auth/reset-password-factory'

export const makeResetPasswordController = () => {
  const resetPasswordController = new ResetPasswordController(
    makeResetPasswordUseCase()
  )
  return resetPasswordController
}
