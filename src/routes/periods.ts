import { Router } from 'express'
import {
  createPeriodCtrl,
  deletePeriodCtrl,
  getAllPeriodsCtrl,
  getPeriodByIdCtrl,
  updatePeriodCtrl
} from '../modules/period/controllers/period.controllers'
import passport from 'passport'

const router = Router()

router.get('/:career', passport.authenticate('jwt', { session: false }), getAllPeriodsCtrl)

router.get('/:career/:period', passport.authenticate('jwt', { session: false }), getPeriodByIdCtrl)

router.post('/:career', passport.authenticate('jwt', { session: false }), createPeriodCtrl)

router.put('/:career/:period', passport.authenticate('jwt', { session: false }), updatePeriodCtrl)

router.delete('/:career/:period', passport.authenticate('jwt', { session: false }), deletePeriodCtrl)

export { router }
