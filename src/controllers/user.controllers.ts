import { Request, Response } from "express";
import { createNewUserIntance, loginUserService } from "../services/user.services";

export async function registerUserCtrl (req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;
    console.log({ username, password, email });
    const newUser = await createNewUserIntance({ username, password, email });

    res.status(201).json(newUser);
  } catch (error) {
    console.log("error in controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function loginUserCtrl (req: Request, res: Response) {
  try {
    const token = await loginUserService(req.body.email, req.body.password);

    if (!token) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
