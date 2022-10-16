<<<<<<< HEAD
import { Router } from "express";
import passport from "passport";
=======
import { Router } from 'express'
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
import {
  createPeriodCtrl,
  deletePeriodCtrl,
  getAllPeriodsCtrl,
  getPeriodByIdCtrl,
  updatePeriodCtrl
} from '../modules/period/controllers/period.controllers'

const router = Router()

<<<<<<< HEAD
router.get("/:career", passport.authenticate("jwt", { session: false }), getAllPeriodsCtrl);

router.get("/:career/:period", passport.authenticate("jwt", { session: false }), getPeriodByIdCtrl);

router.post("/:career", passport.authenticate("jwt", { session: false }), createPeriodCtrl);

router.put("/:career/:period", passport.authenticate("jwt", { session: false }), updatePeriodCtrl);

router.delete("/:career/:period", passport.authenticate("jwt", { session: false }), deletePeriodCtrl);
=======
router.get('/:career', getAllPeriodsCtrl)

router.get('/:career/:period', getPeriodByIdCtrl)

router.post('/:career', createPeriodCtrl)

router.put('/:career/:period', updatePeriodCtrl)

router.delete('/:career/:period', deletePeriodCtrl)
>>>>>>> 895dce0 (add fix eslint erros script in package.json)

export { router }
