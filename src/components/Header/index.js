/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <section>
        <img src={logo} alt="Logo" />
        <nav>
          <a href="#home">Home</a>
          <a href="#contato">Contato</a>
          <a href="#social">Social Media</a>
        </nav>
      </section>
    </Container>
  );
}
