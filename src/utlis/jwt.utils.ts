import jwt from 'jsonwebtoken'
import config from 'config'
import logger from './logger'

const privateKey = config.get<string>("privateKey")
const publicKey = config.get<string>("publicKey")

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256"
  })
}

export function verifyJwt(token: string) {
  try {
    //verify the token with public key to check data not modified, signature, and expiration 
    const decoded = jwt.verify(token, publicKey)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    logger.error(error)
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null
    }
  }
}