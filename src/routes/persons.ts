import { Router } from "express";
import passport from "passport";
import {
  createPersonCtrl,
  editPersonCtrl,
  getPersonByIdCtrl
} from "../controllers/person.controllers";

const router = Router();

router.get("/:user", passport.authenticate("jwt", { session: false }), getPersonByIdCtrl);

router.post("/:user", passport.authenticate("jwt", { session: false }), createPersonCtrl);

router.put("/:user", passport.authenticate("jwt", { session: false }), editPersonCtrl);

export { router };
