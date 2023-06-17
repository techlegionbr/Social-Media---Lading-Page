import {
  Container,
  HeadsetsContainer,
  HeadsetItemContainer,
  SocialContainer,
  HeroContent,
} from "./styles";

//import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

import { FaEnvelope } from "react-icons/fa";

import headImg1 from "../../assets/headset/head1.png";

export function Main() {
  return (
    <Container>
      <section>
        <HeroContent>
          <h1>
            Aumente sua presença online e impulsione seus negócios com nossa
            expertise em Social Media.
          </h1>
          <p>
            Receba novidades dos nossos serviços e fique ligado nos projetos em
            que lançarmos
          </p>
          <div>
            <div>
              {/*<FaEnvelope />*/}
              <input type="text" placeholder="Coloque um email válido" />
              <button>Enviar</button>
            </div>

            {/*FiArrowRight className="arrow-right"/>*/}
          </div>
        </HeroContent>

        <HeadsetsContainer>
          <section>
            <img src={headImg1} alt="Headset 1" />
          </section>
        </HeadsetsContainer>
      </section>
    </Container>
  );
}
