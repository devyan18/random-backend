import { Router } from "express";
import {
  createNewCareerCtrl,
  deleteCareerByIdCtrl,
  getAllCareersCtrl,
  getCareerByIdCtrl,
  updateCareerByIdCtrl
} from "../modules/career/controllers/career.controllers";

const router = Router();

router.get("/", getAllCareersCtrl);

router.get("/:career", getCareerByIdCtrl);

router.post("/", createNewCareerCtrl);

router.put("/:career", updateCareerByIdCtrl);

router.delete("/:career", deleteCareerByIdCtrl);

export { router };
