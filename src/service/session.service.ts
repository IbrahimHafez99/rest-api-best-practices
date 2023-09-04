import { FilterQuery, ObjectId, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";
import { signJwt, verifyJwt } from "../utlis/jwt.utils";
import { get, omit, unset } from "lodash";
import { findUser } from "./user.service";
import config from "config";

interface EncodedUser {
  _id: ObjectId;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function createSession(userId: string, userAgent: string) {
  try {
    const session = await SessionModel.create({ user: userId, userAgent })
    return session.toJSON()
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean()
}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) {
  return SessionModel.updateOne(query, update)
}

export async function reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
  //verify that the refresh token is not expired and get the decoded data
  const { decoded } = verifyJwt(refreshToken)

  //if the decoded data doesn't exist (expired, session id) return false
  if (!decoded || !get(decoded, "_id")) return false

  // if it does exist get the session id from the decoded data and query the sessions in the DB
  const session = await SessionModel.findById(get(decoded, "session"))

  //if session doesn't exist or invalid return false
  if (!session || !session.valid) {
    return false
  }
  // if it exists query the user data using the session user id
  let user = await findUser({ _id: session.user })
  if (!user) {
    return false
  }
  
  //execlude the password from the user object
  const clonedUser: EncodedUser = { ...user }
  if ('password' in clonedUser) {
    delete clonedUser.password;
  }

  console.log("user after clone", clonedUser)

  //create access token with user data and session id as payload
  const accessToken = signJwt({
    ...clonedUser, session: session._id
  }, {
    expiresIn: config.get("accessTokenTtl")
  })
  return accessToken
}
