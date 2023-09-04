import { Request, Response } from "express";
import logger from "../utlis/logger";
import UserModel from "../models/user.model";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";
export async function createrUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
  try {
    const user = await createUser(req.body)

    return res.status(201).json({
      data: omit(user.toJSON(), "password"),
      status: "success",
      message: "Created"
    })
  } catch (error: any) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}