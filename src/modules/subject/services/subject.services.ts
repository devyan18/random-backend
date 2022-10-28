import { Types } from 'mongoose'
import Subject from '../interfaces/subject.entity'
import SubjectModel from '../models/subject.model'

export async function listSubjects () {
  const subjects = await SubjectModel.find({})

  return subjects
}

export async function getSubject (subjectId: string | Types.ObjectId) {
  const subject = await SubjectModel.findById(subjectId)

  if (!subject) return null

  return subject
}

export async function createSubject (subject: Subject) {
  const newSubject = await SubjectModel.create(subject)

  return newSubject
}

export async function updateSubject (subject: Subject) {
  const updatedSubject = await SubjectModel.updateOne(subject)

  return updatedSubject
}

export async function deleteSubject (subjectId: string | Types.ObjectId) {
  const deletedSubject = await SubjectModel.findByIdAndDelete(subjectId)

  return deletedSubject
}
