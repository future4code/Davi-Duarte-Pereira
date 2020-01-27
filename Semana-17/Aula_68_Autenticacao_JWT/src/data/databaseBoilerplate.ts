import knex from 'knex'

export abstract class DatabaseBoilerplate {
  protected connection: knex = knex({
    client: 'mysql',
    connection: {
      host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user: 'davi',
      password: '63eeb24017ec39b561de0ffb818d5b12',
      database: 'davi'
    }
  });
  
}