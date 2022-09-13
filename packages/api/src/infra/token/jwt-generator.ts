import { TokenGenerator } from 'api/src/data/protocols/token/generator'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET ?? ''

export class JwtGenerator implements TokenGenerator {
  generate(param: { id: string }): string {
    return jwt.sign(param, SECRET, {
      expiresIn: 86400
    })
  }
}
