import { TypeOf, object, string } from 'zod'

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required"
    }).email({ message: "Enter a valid email" }),
    password: string({
      required_error: "Password is required"
    })
  })
})


