import { Router } from 'express'
import zodValidation from '../middlewares/zodValidation'
import {
  loginUserCtrl,
  registerUserCtrl
} from '../modules/auth/controllers/auth.controllers'
import {
  loginSchema,
  registerSchema
} from '../modules/auth/validations/auth.schemas'

const router = Router()

router.post('/login', zodValidation(loginSchema), loginUserCtrl)

router.post('/register', zodValidation(registerSchema), registerUserCtrl)

export { router }
