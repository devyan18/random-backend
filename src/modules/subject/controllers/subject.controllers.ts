import { Request, Response } from 'express'
import {
  createSubject,
  deleteSubject,
  getSubject,
  listSubjects,
  updateSubject
} from '../services/subject.services'

export async function getAllSubjectsCtrl (_req: Request, res: Response) {
  try {
    const subjects = await listSubjects()
    res.status(200).json({
      subjects
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Subjects' })
  }
}

export async function getSubjectByIdCtrl (req: Request, res: Response) {
  try {
    const subject = await getSubject(req.params.id)
    if (!subject) return res.sendStatus(404)
    res.status(200).json({
      subject
    })
  } catch (e) {
    res.status(400).send({ error: 'get SubjectById' })
  }
}

export async function createSubjectCtrl (req: Request, res: Response) {
  try {
    const subject = await createSubject(req.body)
    res.status(200).json({
      subject
    })
  } catch (e) {
    res.status(400).send({ error: 'create Subject' })
  }
}

export async function updateSubjectCtrl (req: Request, res: Response) {
  try {
    const updatedSubject = await updateSubject(req.body)
    res.status(200).json({
      updatedSubject
    })
  } catch (e) {
    res.status(400).send({ error: 'update Subject' })
  }
}

export async function deleteSubjectCtrl (req: Request, res: Response) {
  try {
    const deletedSubject = await deleteSubject(req.params.id)
    res.status(200).json({
      deletedSubject
    })
  } catch (e) {
    res.status(400).send({ error: 'delete Subject' })
  }
}
