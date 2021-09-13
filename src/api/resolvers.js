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
        },
        async updateAluno (_,{ id, input }){
            const result = await db('alunos').where({id}).update({
                nome: input.nome,
                cpf: input.cpf,
                email: input.email
            })
            return await db('alunos').where({ id }).first()
          
        },

        async deleteAluno (_, filtro){
            
            if (filtro.id) {
                return await db('alunos').where({id: filtro.id}).delete();
            }
            
            throw new Error("Faltou um parametro");
        }
        
        
        //Falta criar o delete e update
        
    }


}