import { Document, model, Schema, Types } from 'mongoose'
import Period from '../interfaces/period.entity'
import { ICareerModel } from '../../career/models/career.model'
import { ISubjectModel } from '../../subject/models/subject.model'

export interface IPeriodModel extends Period, Document {
  career: Types.ObjectId | ICareerModel
  subjects: Array<Types.ObjectId | ISubjectModel>
}

const PeriodSchema = new Schema<IPeriodModel>({
  periodName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  career: {
    type: Types.ObjectId,
    ref: 'Career'
  },
  subjects: [{
    type: Types.ObjectId,
    ref: 'Subject'
  }]
},
{
  timestamps: true
})

export default model<IPeriodModel>('Period', PeriodSchema)
