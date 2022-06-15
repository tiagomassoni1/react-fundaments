import React from "react";
import Alunos from "../../data/Alunos";

export default (props) => {
    
    const list = Alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} tem a nota: {aluno.nota}
            </li>
        );
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {list}
            </ul>
        </div>
    )
}