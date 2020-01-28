import knex from 'knex'

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
}

