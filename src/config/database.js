const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

knex('alunos').insert({
    nome: "Joy",
    cpf: '123.493.111-11',
    email: 'joy@teste.com'
}).then(data => console.log(data))

knex('alunos').select('*').then(result => console.log(result))