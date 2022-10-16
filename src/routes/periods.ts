import { Router } from 'express'
import {
  createPeriodCtrl,
  deletePeriodCtrl,
  getAllPeriodsCtrl,
  getPeriodByIdCtrl,
  updatePeriodCtrl
} from '../modules/period/controllers/period.controllers'

const router = Router()

router.get('/:career', getAllPeriodsCtrl)

router.get('/:career/:period', getPeriodByIdCtrl)

router.post('/:career', createPeriodCtrl)

router.put('/:career/:period', updatePeriodCtrl)

router.delete('/:career/:period', deletePeriodCtrl)

export { router }
