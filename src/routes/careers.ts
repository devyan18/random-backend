import { Router } from "express";
import passport from "passport";
import {
  createCareerCtrl,
  deleteCareerCtrl,
  getAllCareersCtrl,
  getCareerByIdCtrl,
  updateCareerCtrl
} from "../modules/career/controllers/career.controllers";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAllCareersCtrl);

router.get("/:career", passport.authenticate("jwt", { session: false }), getCareerByIdCtrl);

router.post("/", passport.authenticate("jwt", { session: false }), createCareerCtrl);

router.put("/:career", passport.authenticate("jwt", { session: false }), updateCareerCtrl);

router.delete("/:career", passport.authenticate("jwt", { session: false }), deleteCareerCtrl);

export { router };
