import { Router } from "express";
import {
  createUserCtrl,
  deleteUserCtrl,
  getAllUsersCtrl,
  getUserByIdCtrl,
  updateUserCtrl
} from "@modules/user/controllers/user.controllers";
import zodValidation from "../middlewares/zodValidation";
import { loginSchema, registerSchema } from "@modules/user/validations/user.schemas";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAllUsersCtrl);

router.get("/", passport.authenticate("jwt", { session: false }), getUserByIdCtrl);

router.post("/", passport.authenticate("jwt", { session: false }), zodValidation(loginSchema), createUserCtrl);

router.put("/", passport.authenticate("jwt", { session: false }), zodValidation(registerSchema), updateUserCtrl);

router.delete("/", passport.authenticate("jwt", { session: false }), deleteUserCtrl);

export { router };
