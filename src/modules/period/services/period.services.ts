import CareerModel from '../../career/models/career.model'
import PeriodModel from '../models/period.model'
import Period from '../interfaces/period.entity'

export async function getAllPeriod () {
  return PeriodModel.find()
}

export async function getPeriodById (id: string) {
  return PeriodModel.findById(id)
}

export async function createPeriod (
  careerId: string,
  {
    periodName,
    startDate,
    endDate
  }: Period) {
  const period = await PeriodModel.create({
    periodName,
    startDate,
    endDate
  })

  const career = await CareerModel.findById(careerId)

  if (!career) throw new Error('Career not found')

  career.periods.push(period._id)

  await career.save()

  return period
}

export async function updatePeriod (periodId: string, period: Period) {
  return PeriodModel.findByIdAndUpdate(periodId, period)
}

export async function deletePeriod (id: {}) {
  return PeriodModel.findByIdAndDelete(id, { new: true })
}
