import knex from 'knex'

export abstract class DatabaseBoilerplate {
  protected connection: knex = knex({
    client: 'mysql',
    connection: {
      host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user: 'davi',
      password: process.env.SENHA_DO_BANCO,
      database: 'davi'
    }
  });

  protected getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0];
}

