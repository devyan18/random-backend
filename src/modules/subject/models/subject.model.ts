import { Document, model, Schema, Types } from 'mongoose'
import { IUserModel } from '../../user/models/user.model'
import Subject from '../interfaces/subject.entity'

export interface ISubjectModel extends Subject, Document {
  teachers: Array<Types.ObjectId | IUserModel>
}

const SubjectSchema = new Schema<ISubjectModel>({
  subjectName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teachers: [{
    type: Types.ObjectId,
    ref: 'User'
  }]
},
{
  timestamps: true
})

export default model<ISubjectModel>('Subject', SubjectSchema)
