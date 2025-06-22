import { useState } from "react";

import {
  FlashcardBox,
  FlashcardAberto,
  FlashcardPergunta,
  BotoesResposta
} from "./styles";


import {
  IoPlayOutline,
  IoRefreshOutline,
  IoCloseCircle,
  IoHelpCircle,
  IoCheckmarkCircle
} from "react-icons/io5";




export default function Flashcard({ index, pergunta, resposta, registrarResposta, status }) {
  const [estado, setEstado] = useState("fechado");

  function handleAbrirPergunta() {
    if (!status) setEstado("pergunta");
  }

  function handleMostrarResposta() {
    setEstado("resposta");
  }

  function handleResponder(opcao) {
    registrarResposta(index, opcao);
    setEstado("respondido");
  }

  if (estado === "fechado" && !status) {
    return (
      <FlashcardBox onClick={handleAbrirPergunta}>
        <p>Pergunta {index + 1}</p>
        <IoPlayOutline size={20} />
      </FlashcardBox>
    );
  }
  if (estado === "pergunta") {
    return (
      <FlashcardPergunta>
        <p>{pergunta}</p>
        <IoRefreshOutline size={20} onClick={handleMostrarResposta} />
      </FlashcardPergunta>
    );
  }

  if (estado === "resposta") {
    return (
      <FlashcardAberto>
        <p>{resposta}</p>
        <BotoesResposta>
          <button className="nao-lembrei" onClick={() => handleResponder("nao-lembrei")}>
            Não lembrei
          </button>
          <button className="quase-nao-lembrei" onClick={() => handleResponder("quase-nao-lembrei")}>
            Quase não lembrei
          </button>
          <button className="zap" onClick={() => handleResponder("zap")}>
            Zap!
          </button>
        </BotoesResposta>
      </FlashcardAberto>
    );
  }

  if (estado === "respondido" || status) {
    let cor = "";
    let icone = null;

    if (status === "nao-lembrei") {
      cor = "red";
      icone = <IoCloseCircle color="red" />;
    } else if (status === "quase-nao-lembrei") {
      cor = "orange";
      icone = <IoHelpCircle color="orange" />;
    } else if (status === "zap") {
      cor = "green";
      icone = <IoCheckmarkCircle color="green" />;
    }

    return (
      <FlashcardBox style={{ textDecoration: "line-through", color: cor }}>
        <p>Pergunta {index + 1}</p>
        {icone}
      </FlashcardBox>
    );
  }

  return null;
}
