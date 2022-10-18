import { Router } from 'express'
import {
  createCareerCtrl,
  deleteCareerCtrl,
  listCareersCtrl,
  getCareerByIdCtrl,
  updateCareerCtrl
} from '../modules/career/controllers/career.controllers'
import passport from 'passport'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), listCareersCtrl)

router.get('/:career', passport.authenticate('jwt', { session: false }), getCareerByIdCtrl)

router.post('/', passport.authenticate('jwt', { session: false }), createCareerCtrl)

router.put('/:career', passport.authenticate('jwt', { session: false }), updateCareerCtrl)

router.delete('/:career', passport.authenticate('jwt', { session: false }), deleteCareerCtrl)

export { router }
