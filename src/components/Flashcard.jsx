import { useState } from "react";
import { FlashcardBox } from "./styles";

import { IoPlayOutline } from "react-icons/io5";

export default function Flashcard({ index, pergunta }) {
  const [aberto, setAberto] = useState(false);

  return (
    <FlashcardBox onClick={() => setAberto(true)}>
      {!aberto ? (
        <div>
          <p>Pergunta {index + 1}</p>
          <IoPlayOutline size={20} />
        </div>
      ) : (
        <p>{pergunta}</p>
      )}
    </FlashcardBox>
  );
}
