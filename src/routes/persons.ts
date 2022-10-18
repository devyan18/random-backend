import { Router } from 'express'
import passport from 'passport'
import {
  updatePersonCtrl,
  getPersonCtrl
} from '../modules/person/controllers/person.controllers'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), getPersonCtrl)

router.put('/', passport.authenticate('jwt', { session: false }), updatePersonCtrl)

export { router }
