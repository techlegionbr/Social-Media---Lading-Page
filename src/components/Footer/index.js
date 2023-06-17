import { Container, ProductContainer } from "./styles";

import logoImg from "../../assets/logoImg.svg";

export function Footer() {
  return (
    <Container>
      <div>
        <div>
          <img src={logoImg} alt="Logo" />
          <h2>TECH LEGION</h2>
        </div>
      </div>
      <section>
        <ul>
          <h3>Empresa</h3>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
        </ul>

        <ul>
          <h3>Serviços </h3>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
        </ul>

        <ul>
          <h3>FAQ </h3>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
          <li>lorem ipsum </li>
        </ul>
      </section>
    </Container>
  );
}
