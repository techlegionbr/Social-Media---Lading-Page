import { Container } from "./styles";

import headImg1 from "../../assets/headset/head1.png";

export function Banner() {
  return (
    <Container>
      <section>
        <div>
          <h2>
            Aproveite todo o poder das redes sociais para impulsionar seu
            negócio para o próximo nível.
          </h2>
          <div>
            <p> Quero impulsionar meu negócio</p>
          </div>

          {/*<div>
            <section>
            <img src={headImg1} alt="Headset 1" />
            </section>
          </div>*/}
        </div>
      </section>
    </Container>
  );
}
