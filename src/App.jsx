import Deck from "./components/Deck";
import Footer from "./components/Footer";
import { Container, Logo } from "./components/styles";

import zapLogo from "./assets/logo.png";


import { useState } from "react";
import deck from "./data/deck";



export default function App() {
  const [respondidos, setRespondidos] = useState(0);

  return (
    <Container>
      <Logo>
        <img src={zapLogo} alt="Zap Recall" />

        <h1>ZapRecall</h1>
      </Logo>
      <Deck />
      <Footer respondidos={respondidos} total={deck.length} />
    </Container>
  );
}
