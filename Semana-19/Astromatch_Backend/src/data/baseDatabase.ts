import knex from 'knex'
import { User } from '../business/entities/user'

export abstract class BaseDatabase {
  protected connection: knex = knex({
    client: 'mysql',
    connection: {
      host: '54.211.186.233',
      user: 'davi',
      password: process.env.DATABASE_PASSWORD,
      database: 'davi_f4'
    }
  })

  protected isAmatch(): number {
    return (Math.random() < 0.5) === true ? 1 : 0
  }

  protected dbModelToUser(dbModel: any): User {
    return new User(
      dbModel.name,
      dbModel.email,
      dbModel.password,
      dbModel.id,
      dbModel.birthday,
      dbModel.age,
      dbModel.photo
    )
  }
}

