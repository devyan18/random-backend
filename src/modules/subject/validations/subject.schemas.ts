import { z } from 'zod'

const subjectSchema = z.object({
  subjectName: z.string().min(3).max(50),
  description: z.string().min(3).max(255),
  startDate: z.date(),
  endDate: z.date()
})

export { subjectSchema }
