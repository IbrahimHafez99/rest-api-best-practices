import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../models/user.model";
import logger from "../utlis/logger";
import { FilterQuery } from "mongoose";

export async function createUser(input: UserInput) {
  try {
    return await UserModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function validatePassword({ email, password }: { email: string; password: string }) {
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      return false
    }
    const isValid = await user.comparePassword(password)
    if (!isValid) {
      return false
    }
    return omit(user.toJSON(), "password")
  } catch (error: any) {
    logger.error(error)
    throw new Error(error)
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean()
}