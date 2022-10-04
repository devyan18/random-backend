import { Router } from "express";
import {
  loginUserCtrl,
  registerUserCtrl
} from "../controllers/user.controllers";
import zodValidation from "../middlewares/zodValidation";
import { loginSchema, registerSchema } from "../schemas/users.schemas";

const router = Router();

router.post("/login", zodValidation(loginSchema), loginUserCtrl);

router.post("/register", zodValidation(registerSchema), registerUserCtrl);

export { router };
