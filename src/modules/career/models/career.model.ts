import { Document, model, Schema, Types } from "mongoose";
import Career from "../interfaces/career.entity";
import { PeriodModel } from "@modules/period/models/period.model";

export interface CareerModel extends Career, Document {
  periods: Array<Types.ObjectId | PeriodModel>
}

const CareerSchema = new Schema<CareerModel>({
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
    ref: "Period"
  }]
},
{
  timestamps: true
});

export default model<CareerModel>("Career", CareerSchema);
