import { Router } from "express";
import {
  createNewMatterFromPeriodCtrl,
  deleteMatterByIdCtrl,
  getAllMattersByPeriodCtrl,
  getMatterByIdCtrl,
  updateMatterByIdCtrl
} from "../controllers/matter.controllers";

const router = Router();

router.get("/:period", getAllMattersByPeriodCtrl);

router.get("/:period/:matter", getMatterByIdCtrl);

router.post("/:period", createNewMatterFromPeriodCtrl);

router.put("/:period/:matter", updateMatterByIdCtrl);

router.delete("/:period/:matter", deleteMatterByIdCtrl);

export { router };
