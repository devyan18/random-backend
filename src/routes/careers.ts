import { Router } from "express";
import {
  createCareerCtrl,
  deleteCareerCtrl,
  getAllCareersCtrl,
  getCareerByIdCtrl,
  updateCareerCtrl
} from "../modules/career/controllers/career.controllers";

const router = Router();

router.get("/", getAllCareersCtrl);

router.get("/:career", getCareerByIdCtrl);

router.post("/", createCareerCtrl);

router.put("/:career", updateCareerCtrl);

router.delete("/:career", deleteCareerCtrl);

export { router };
