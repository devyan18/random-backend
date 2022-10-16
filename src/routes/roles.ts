import { Router } from "express";
import {
  createRoleCtrl,
  deleteRoleCtrl,
  getAllRolesCtrl,
  updateRoleCtrl,
  getRoleByIdCtrl
} from "@modules/role/controllers/role.controllers";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAllRolesCtrl);
router.get("/:role", passport.authenticate("jwt", { session: false }), getRoleByIdCtrl);
router.post("/", passport.authenticate("jwt", { session: false }), createRoleCtrl);
router.put("/:role", passport.authenticate("jwt", { session: false }), updateRoleCtrl);
router.delete("/:role", passport.authenticate("jwt", { session: false }), deleteRoleCtrl);

export { router };
