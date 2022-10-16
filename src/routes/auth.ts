import { Router } from 'express'
import {
  loginUserCtrl,
  registerUserCtrl
} from '../modules/auth/controllers/auth.controllers'

const router = Router()

router.post('/login', loginUserCtrl)

router.post('/register', registerUserCtrl)

export { router }
