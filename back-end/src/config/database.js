const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

//knex('alunos').insert({
//    nome: "Romulo",
//    cpf: '123.777.111-11',
//    email: 'romulo@teste.com'
//}).then(data => console.log(data))

knex('alunos').select('*').then(result => console.log(result))