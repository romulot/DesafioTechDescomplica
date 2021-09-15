// Update with your config settings.



module.exports = {

    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'usuario',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
