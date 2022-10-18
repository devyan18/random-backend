import { Router } from 'express'
import {
  createCareerCtrl,
  deleteCareerCtrl,
  listCareersCtrl,
  getCareerByIdCtrl,
  updateCareerCtrl
} from '../modules/career/controllers/career.controllers'
import passport from 'passport'
import zodValidation from '../middlewares/zodValidation'
import { careerSchema } from '../modules/career/validations/career.schemas'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), listCareersCtrl)

router.get('/:career', passport.authenticate('jwt', { session: false }), getCareerByIdCtrl)

router.post('/', passport.authenticate('jwt', { session: false }), zodValidation(careerSchema), createCareerCtrl)

router.put('/:career', passport.authenticate('jwt', { session: false }), zodValidation(careerSchema), updateCareerCtrl)

router.delete('/:career', passport.authenticate('jwt', { session: false }), deleteCareerCtrl)

export { router }
