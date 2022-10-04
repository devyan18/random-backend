import { Router } from "express";
import passport from "passport";
import {
  getAllPermissionsCtrl,
  getPermissionByPermissionIdCtrl
} from "../controllers/permission.controllers";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAllPermissionsCtrl);
router.get("/:permission", passport.authenticate("jwt", { session: false }), getPermissionByPermissionIdCtrl);

export { router };
