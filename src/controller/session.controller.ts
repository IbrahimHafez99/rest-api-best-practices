import { Request, Response } from "express";
import logger from "../utlis/logger";
import { validatePassword } from "../service/user.service";
import { createSession, findSessions, updateSession } from "../service/session.service";
import { signJwt } from "../utlis/jwt.utils";
import config from 'config'
export async function createrSessionHandler(req: Request, res: Response) {
  try {
    // Validate User Password
    const user = await validatePassword(req.body)
    if (!user) {
      return res.status(401).send("Invalid email or password")
    }
    //create user session
    const session = await createSession(user._id, req.get("user-agent") || "")

    //create access token
    const accessToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get("accessTokenTtl") })

    //create refresh token
    const refreshToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get("refreshTokenTtl") })

    return res.send({ refreshToken, accessToken })
  } catch (error) {
    logger.error(error)
  }
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId: string = res.locals.user._id
  console.log(userId)
  const sessions = await findSessions({ user: userId, valid: true })
  return res.send(sessions)
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session
  console.log(sessionId)
  await updateSession({ _id: sessionId }, { valid: false })
  return res.send({ accessToken: null, refreshToken: null })
}