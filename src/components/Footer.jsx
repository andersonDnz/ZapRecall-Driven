import { FooterContainer } from "./styles";

export default function Footer({ respostas = [], total = 0 }) {
  const respondidos = respostas.filter(r => r !== undefined).length;

  return (
    <FooterContainer>
      <p>
        {respondidos}/{total} CONCLUÍDOS
      </p>
    </FooterContainer>
  );
}
