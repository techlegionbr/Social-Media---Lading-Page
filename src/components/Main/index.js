import { Container, ServiceContainer, Contents } from "./styles";

import logo from "../../assets/logo.png";

export function Main() {
  return (
    <Container>
      <section>
        <Contents>
          <h1>
            Aumente sua presença online e impulsione seus negócios com nossa
            expertise em Social Media.
          </h1>
          <p>
            Receba novidades dos nossos serviços e fique ligado nos projetos em
            que lançarmos
          </p>
          <div>
            <input />
          </div>
        </Contents>

        <ServiceContainer>
          <section>
            <img src={logo} alt="imagem" />
          </section>
        </ServiceContainer>
      </section>
    </Container>
  );
}
