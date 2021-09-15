import { useQuery } from "@apollo/client";

import ALUNOS from "./querys/index";

import "./App.css";

function App() {
  const { loading, error, data } = useQuery(ALUNOS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <section className="parent">
      {data.getAlunos.map((aluno, index) => (
          <div className="container">
            <p>
              <b>Nome:</b> {aluno.nome}
            </p>
            <p>
              <b>CPF:</b> {aluno.cpf}
            </p>
            <p>
              <b>EMAIL:</b> {aluno.email}
            </p>
          </div>
      ))}
    </section>
  );
}

export default App;