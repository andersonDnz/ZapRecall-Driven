import Flashcard from "./Flashcard";
import deck from "../data/deck";

export default function Deck() {
  return (
    <>
      {deck.map((card, index) => (
        <Flashcard key={index} index={index} pergunta={card.pergunta} />
      ))}
    </>
  );
}
