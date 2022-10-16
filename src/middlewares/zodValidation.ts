import { Response, Request, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const zodValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      const zodErrors = error.issues.map((issue) => {
        return { [issue.path[0]]: issue.message }
      })
      console.log(zodErrors)
      return res.status(406).json(zodErrors)
    }
    return res.sendStatus(500)
  }
}

export default zodValidation
