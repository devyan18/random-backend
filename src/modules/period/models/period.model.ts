import { Document, model, Schema, Types } from "mongoose";
import Period from "../interfaces/period.entity";
import { ICareerModel } from "@modules/career/models/career.model";
import { IMatterModel } from "@modules/matter/models/matter.model";

export interface IPeriodModel extends Period, Document {
  career: Types.ObjectId | ICareerModel
  matters: Array<Types.ObjectId | IMatterModel>
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

export default model<IPeriodModel>("Period", PeriodSchema);
