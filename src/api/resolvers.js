const db = require('../config/database')

module.exports = {
    Query: {
        async getAluno(_, { id }) {
            return await db('alunos').where({ id }).first()
        },
        async getAlunos() {
            return await db('alunos')
        }
    },
    Mutation: {
        async createAluno (_, { input }) {
            const result = await db('alunos').insert({
                nome: input.nome,
                cpf: input.cpf,
                email: input.email
            })

            const id = result[0]
            return await db('alunos').where({ id }).first()
        }
        
        
        //Falta criar o delete e update
        
    }


}