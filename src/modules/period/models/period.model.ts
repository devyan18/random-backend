import { Document, model, Schema, Types } from "mongoose";
import Period from "../interfaces/period.entity";
import { CareerModel } from "@modules/career/models/career.model";
import { MatterModel } from "@modules/matter/models/matter.model";

export interface PeriodModel extends Period, Document {
  career: Types.ObjectId | CareerModel
  matters: Array<Types.ObjectId | MatterModel>
}

const PeriodSchema = new Schema<PeriodModel>({
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
    ref: "Career"
  },
  matters: [{
    type: Types.ObjectId,
    ref: "Matter"
  }]
},
{
  timestamps: true
});

export default model<PeriodModel>("Period", PeriodSchema);
