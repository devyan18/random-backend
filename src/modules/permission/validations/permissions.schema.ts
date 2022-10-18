import { z } from 'zod'

const permissionSchema = z.object({
  permissionName: z.string().min(3).max(50),
  description: z.string().min(3).max(50)
})

export { permissionSchema }
