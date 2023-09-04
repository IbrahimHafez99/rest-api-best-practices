import { NextFunction, Request, Response } from "express";
import { get } from 'lodash'
import { verifyJwt } from "../utlis/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";
const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', "").replace(/^Bearer\s/, "")
  const refreshToken = get(req, "headers.x-refresh")
  console.log("refreshToken", refreshToken)
  //why not return response with 401 not authorized ?
  if (!accessToken) {
    return next()
  }
  const { decoded, expired } = verifyJwt(accessToken)
  if (decoded) {
    res.locals.user = decoded
    return next()
  }
  if (expired && refreshToken) {
    console.log("refreshToken", expired)
    const newAccessToken = await reIssueAccessToken({ refreshToken } as { refreshToken: string })
    if (newAccessToken) {
      //what is this ??
      res.setHeader('x-access-token', newAccessToken)
      const result = verifyJwt(newAccessToken)
      console.log(result)
      res.locals.user = result.decoded
      return next()
    }

  }
  return next()
}

export default deserializeUser