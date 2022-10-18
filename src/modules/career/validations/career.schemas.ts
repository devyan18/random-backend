import { z } from 'zod'

const careerSchema = z.object({
  careerName: z.string().min(3).max(50),
  description: z.string().min(3).max(255)
})

export { careerSchema }
