import { Router } from 'express'

import { makeAuthenticationController } from '../main/factories/controllers/authentication-controller-factory'
import { makeForgotPasswordController } from '../main/factories/controllers/forgot-password-controller-factory'
import { makeResetPasswordController } from '../main/factories/controllers/reset-password-controller-factory'

import AuthMiddleware from './middlewares/auth'
import LogginMiddleware from './middlewares/logging'

const authenticateController = makeAuthenticationController()

const forgotPasswordController = makeForgotPasswordController()

const resetPasswordController = makeResetPasswordController()

const router = Router()

router.use(LogginMiddleware)

router.get('/', (req, res) => {
  res.json({ message: 'Server UP' })
})

router.post('/auth', (request, response) =>
  authenticateController.handle(request, response)
)
router.post('/forgot_password', (request, response) =>
  forgotPasswordController.handle(request, response)
)
router.post('/reset_password', (request, response) =>
  resetPasswordController.handle(request, response)
)

// router.post('/users', UsersController.create)

router.use(AuthMiddleware)

// router.get('/users', UsersController.index)

export default router
