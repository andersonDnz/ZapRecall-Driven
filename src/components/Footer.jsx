import { FooterContainer } from "./styles";

export default function Footer({ respondidos, total }) {
  return (
    <FooterContainer>
      <p>
        {respondidos}/{total} CONCLUÍDOS
      </p>

    </FooterContainer>
  );
}
