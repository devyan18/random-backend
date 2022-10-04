import { Request, Response } from "express";
import {
  getAllPermissions,
  getPermissionById
} from "../services/permission.services";

export async function getAllPermissionsCtrl (_req: Request, res: Response) {
  try {
    const permissions = await getAllPermissions();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getPermissionByPermissionIdCtrl (req: Request, res: Response) {
  try {
    const permissionId = req.params.permission;
    const permission = await getPermissionById(permissionId);
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
