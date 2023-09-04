import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

// a function that return another function, the inner function is the middleware where the outer function is basically a wrapper to pass the schema and validate the req against it 
const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    //this middleware parse the body, query, params, and validate against the schema being passed
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    next()
  } catch (err: any) {
    console.log(err)
    return res.status(400).send(err.errors)
  }
}

export default validate