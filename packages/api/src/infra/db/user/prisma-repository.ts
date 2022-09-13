import { PrismaClient } from '@prisma/client'

import { UserRepository } from '../../../data/protocols/db/user/repository'
import { User } from '../../../domain/entities/user'

export class UserPrismaRepository implements UserRepository {
  private prisma = new PrismaClient()

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password ?? '',
        password_reset_token: user.password_reset_token,
        password_reset_expires: user.password_reset_expires
      }
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) return null

    return new User(
      {
        name: user.name,
        email: user.email,
        password: null,
        password_reset_token: user.password_reset_token,
        password_reset_expires: user.password_reset_expires
      },
      user.id
    )
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!user) return null

    return new User(
      {
        name: user.name,
        email: user.email,
        password: null,
        password_reset_token: user.password_reset_token,
        password_reset_expires: user.password_reset_expires
      },
      user.id
    )
  }

  async update(data: Partial<User>): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        email: data.email,
        password_reset_token: data.password_reset_token,
        password_reset_expires: data.password_reset_expires
      }
    })
  }
}
