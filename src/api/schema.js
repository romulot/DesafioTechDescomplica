const resolvers = require ('./resolvers')
const {makeExecutableSchema} = require('graphql-tools')

const alunoAttribs = `
    id: ID
    nome: String!
    cpf: String!
    email: String!
`

const typeDefs = `
    
    type Aluno {
        ${alunoAttribs}
    }

    type Query {
        getAlunos: [Aluno]
        getAluno(id: ID): Aluno
    }

    input alunoInput {
        ${alunoAttribs}
    }

    type Mutation {
        createAluno(input: alunoInput): Aluno
     
    }

`
module.exports = makeExecutableSchema({
    typeDefs,resolvers
})