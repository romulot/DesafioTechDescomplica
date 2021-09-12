const db = require('../config/database')

module.exports = {
    Query:{
        async getAllAlunos(){
            return await db('alunos')
        },
        async getAlunoID(_, {id}){
            return await db('alunos').where({id}).first()
        },
        async getAllAlunoName(_, {nome}){
            return await db('alunos').where({nome}).first()
        },
        async getAllAlunocpf(_, {cpf}){
            return await db('alunos').where({cpf}).first()
        },
        async getAllAlunoEmail(_, {email}){
            return await db('alunos').where({email}).first()
        }
    },
    Mutation: {
        async createAluno(_, {insert}){
            const result = await db('alunos').insert({
                nome: insert.nome,
                cpf: insert.cpf,
                email: insert.email
            })

            const id = result[0]
            return await db('alunos').where({id}).first
        }
        //Falta criar o delete e update
    }


}