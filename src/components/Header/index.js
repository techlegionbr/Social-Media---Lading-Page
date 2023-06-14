import { Container } from "./styles";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <section>
        <img src={logo} alt="Logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Contato</a>
          <a href="#">Social Media</a>
        </nav>
      </section>
    </Container>
  );
}
