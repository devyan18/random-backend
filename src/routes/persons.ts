import { Router } from "express";
import passport from "passport";
import {
  createPersonCtrl,
  editPersonCtrl,
  getPersonByIdCtrl
} from "../controllers/person.controllers";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getPersonByIdCtrl);

router.post("/", passport.authenticate("jwt", { session: false }), createPersonCtrl);

router.put("/", passport.authenticate("jwt", { session: false }), editPersonCtrl);

export { router };
