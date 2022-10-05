import { Request, Response } from "express";
import {
  createRole,
  deleteRole,
  editRole,
  getAllRoles,
  getRoleById
} from "../services/role.services";

export async function getAllRolesCtrl (_req:Request, res: Response) {
  try {
    const roles = await getAllRoles();
    return res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getRoleByRoleIdCtrl (req:Request, res: Response) {
  try {
    const roleId = req.params.role;
    const role = await getRoleById(roleId);
    if (!role) return res.status(404).json({ message: "Role not found" });
    return res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createRoleCtrl (req:Request, res: Response) {
  try {
    const { roleName, description, permissions } = req.body;
    const newRole = await createRole(roleName, description, permissions);
    return res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateRoleCtrl (req:Request, res: Response) {
  try {
    const roleId = req.params.role;
    const { roleName, description, permissions } = req.body;
    const role = await editRole(roleId, roleName, description, permissions);
    if (!role) return res.status(404).json({ message: "Role not found" });
    return res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteRoleCtrl (req:Request, res: Response) {
  try {
    const roleId = req.params.role;
    const role = deleteRole(roleId);
    if (!role) return res.status(404).json({ message: "Role not found" });
    return res.status(200).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
