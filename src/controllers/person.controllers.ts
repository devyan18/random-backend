import { Request, Response } from "express";
import { createNewPerson, updatePerson, getPerson } from "../services/person.services";

export async function getPersonByIdCtrl (req: Request, res: Response) {
  try {
    const userId = req.params.user;
    const person = await getPerson(userId);
    if (!person) return res.status(404).json({ message: "Person not found" });
    return res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createPersonCtrl (req: Request, res: Response) {
  try {
    const userId = req.params.user;
    const person = await createNewPerson(userId, req.body);
    return res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function editPersonCtrl (req: Request, res: Response) {
  try {
    const userId = req.params.user;
    const person = await updatePerson(userId, req.body);
    if (!person) return res.status(404).json({ message: "Person not found" });
    return res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
