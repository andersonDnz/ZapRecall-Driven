import { useState } from "react";

import deck from "./data/deck";

import Flashcard from "./components/Flashcard";
import Footer from "./components/Footer";

import { Container, Logo } from "./components/styles";

import zapLogo from "./assets/logo.png";





export default function App() {
  const [respostas, setRespostas] = useState([]);

  function registrarResposta(index, opcao) {
    const novasRespostas = [...respostas];
    novasRespostas[index] = opcao;
    setRespostas(novasRespostas);
  }

  return (
    <Container>
      <Logo>
        <img src={zapLogo} alt="Zap Recall" />
        <h1>ZapRecall</h1>
      </Logo>

      {deck.map((item, index) => (
        <Flashcard
          key={index}
          index={index}
          pergunta={item.pergunta}
          resposta={item.resposta}
          registrarResposta={registrarResposta}
          status={respostas[index]}
        />
      ))}

      <Footer respostas={respostas} total={deck.length} />
    </Container>
  );
}