import { User } from '../../../../domain/entities/user'

export interface UserRepository {
  create: (user: User) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
  update: (data: Partial<User>) => Promise<void>
}
