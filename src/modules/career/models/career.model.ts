import { Document, model, Schema, Types } from 'mongoose'
import Career from '../interfaces/career.entity'
import { IPeriodModel } from '../../period/models/period.model'

export interface ICareerModel extends Career, Document {
  periods: Array<Types.ObjectId | IPeriodModel>
}

const CareerSchema = new Schema<ICareerModel>({
  careerName: {
    type: String,
    required: true
  },
  description: {
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
  periods: [{
    type: Schema.Types.ObjectId,
    ref: 'Period'
  }]
},
{
  timestamps: true
})

export default model<ICareerModel>('Career', CareerSchema)
