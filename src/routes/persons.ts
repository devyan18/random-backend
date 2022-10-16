import { Router } from 'express'
import passport from 'passport'
import {
  createPersonCtrl,
  updatePersonCtrl,
  getPersonByIdCtrl,
  getAllPersonsCtrl,
  deletePersonCtrl
} from '@modules/person/controllers/person.controllers'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), getAllPersonsCtrl)

router.get('/:person', passport.authenticate('jwt', { session: false }), getPersonByIdCtrl)

router.post('/', passport.authenticate('jwt', { session: false }), createPersonCtrl)

router.put('/', passport.authenticate('jwt', { session: false }), updatePersonCtrl)

router.delete('/:person', passport.authenticate('jwt', { session: false }), deletePersonCtrl)

export { router }
