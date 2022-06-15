import React from "react";
import Primeiro from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

import "./App.css";
import Card from "./components/layout/Card";
import FamilyMember from "./components/FamilyMember";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicionais/ParOuImpar";
import UsuarioInfo from "./components/repeticao/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megasena/MegaSena";

function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos REACT</h1>
      <div className="cards">
      <Card titulo="MegaSena" color="#593223C">
          <MegaSena />
        </Card>
      <Card titulo="Contador" color="#593223C">
          <Contador numeroInicial={10} />
        </Card>
      <Card titulo="Formulário" color="#593223C">
          <Input />
        </Card>
      <Card titulo="Comunicacao Indireta" color="#593223C">
          <IndiretaPai />
        </Card>
      <Card titulo="Comunicacao Direta" color="#593223C">
          <DiretaPai />
        </Card>
      <Card titulo="Condicional 01" color="#982395">
          <ParOuImpar number={21} />
          <UsuarioInfo user={{name: "Tiago"}} />
          <UsuarioInfo user={{email: "Tiago"}} />
        </Card>
      <Card titulo="Lista Produtos" color="#3A9AD9">
          <TabelaProdutos />
        </Card>
        <Card titulo="Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>
        <Card titulo="Componente com Filhos" color="#00C8F8">
          <FamilyMember name="Tiago" surname="Massoni" />
          <FamilyMember name="Luiza" surname="Lopes" />
          <FamilyMember name="Pedro" surname="Silva" />
        </Card>
        <Card titulo="Desafio Aleatório" color="#FA6900">
          <Third min={1} max={60} />
          <Third min={1} max={60} />
        </Card>
        <Card titulo="Primeiro Componente" color="#E8B71A">
          <Primeiro />
        </Card>
        <Card titulo="Parâmetros">
          <Second titulo="Situação do aluno" aluno="Tiago" nota={9.1} />
        </Card>
      </div>
    </div>
  );
}

export default App;
