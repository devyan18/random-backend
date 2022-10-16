<<<<<<< HEAD
import { Router } from "express";
import passport from "passport";
=======
import { Router } from 'express'
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
import {
  createCareerCtrl,
  deleteCareerCtrl,
  getAllCareersCtrl,
  getCareerByIdCtrl,
  updateCareerCtrl
} from '../modules/career/controllers/career.controllers'

const router = Router()

<<<<<<< HEAD
router.get("/", passport.authenticate("jwt", { session: false }), getAllCareersCtrl);

router.get("/:career", passport.authenticate("jwt", { session: false }), getCareerByIdCtrl);

router.post("/", passport.authenticate("jwt", { session: false }), createCareerCtrl);

router.put("/:career", passport.authenticate("jwt", { session: false }), updateCareerCtrl);

router.delete("/:career", passport.authenticate("jwt", { session: false }), deleteCareerCtrl);
=======
router.get('/', getAllCareersCtrl)

router.get('/:career', getCareerByIdCtrl)

router.post('/', createCareerCtrl)

router.put('/:career', updateCareerCtrl)

router.delete('/:career', deleteCareerCtrl)
>>>>>>> 895dce0 (add fix eslint erros script in package.json)

export { router }
