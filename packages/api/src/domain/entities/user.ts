import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'

interface Props {
  name: string
  email: string
  password: string | null
  password_reset_token: string | null
  password_reset_expires: Date | null
}

export class User {
  private _id: string
  private props: Props

  get id(): string {
    return this._id
  }

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get password(): string | null {
    return this.props.password
  }

  get password_reset_token(): string | null {
    return this.props.password_reset_token
  }

  get password_reset_expires(): Date | null {
    return this.props.password_reset_expires
  }

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password ?? '')
  }
}
