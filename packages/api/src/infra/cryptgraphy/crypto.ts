import { Cryptography } from 'api/src/data/protocols/cryptgraphy/cryptography'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

export class Crypto implements Cryptography {
  async compare(plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }

  async hash(plaintext: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)

    return await bcrypt.hash(plaintext, salt)
  }

  random(bytes: number): string {
    return crypto.randomBytes(bytes).toString('hex')
  }
}
