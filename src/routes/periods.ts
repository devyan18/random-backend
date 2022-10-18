import { Router } from 'express'
import {
  createPeriodCtrl,
  deletePeriodCtrl,
  listPeriodsCtrl,
  getPeriodCtrl,
  updatePeriodCtrl
} from '../modules/period/controllers/period.controllers'
import passport from 'passport'

const router = Router()

router.get('/:career', passport.authenticate('jwt', { session: false }), listPeriodsCtrl)

router.get('/:career/:period', passport.authenticate('jwt', { session: false }), getPeriodCtrl)

router.post('/:career', passport.authenticate('jwt', { session: false }), createPeriodCtrl)

router.put('/:career/:period', passport.authenticate('jwt', { session: false }), updatePeriodCtrl)

router.delete('/:career/:period', passport.authenticate('jwt', { session: false }), deletePeriodCtrl)

export { router }
