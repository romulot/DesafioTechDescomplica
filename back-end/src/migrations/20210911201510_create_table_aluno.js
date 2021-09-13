
exports.up = function(knex, Promise) {
  return knex.schema.createTable('alunos', table => {
      table.increments('id').primary()
      table.string('nome', 80).notNullable()
      table.string('cpf', 16).notNullable()
      table.string('email', 80).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alunos')
};
