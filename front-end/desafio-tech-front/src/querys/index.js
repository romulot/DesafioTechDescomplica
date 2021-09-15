import { gql } from "@apollo/client";

const ALUNOS = gql`
  query {
    getAlunos {
        id
        nome
        cpf
        email
    }
  }
`;

export default ALUNOS;