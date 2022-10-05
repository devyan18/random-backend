import { Router } from "express";
import {
  createNewPeriodFromCareerCtrl,
  deletePeriodByIdCtrl,
  getAllPeriodsByCareerIdCtrl,
  getPeriodByIdCtrl,
  updatePeriodByIdCtrl
} from "../controllers/period.controllers";

const router = Router();

router.get("/:career", getAllPeriodsByCareerIdCtrl);

router.get("/:career/:period", getPeriodByIdCtrl);

router.post("/:career", createNewPeriodFromCareerCtrl);

router.put("/:career/:period", updatePeriodByIdCtrl);

router.delete("/:career/:period", deletePeriodByIdCtrl);

export { router };
