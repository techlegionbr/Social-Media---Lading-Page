import { Container } from "./styles";

import Saly from "../../assets/Saly.png";

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

          <div>
            <section>
              <img src={Saly} alt="" />
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
}
