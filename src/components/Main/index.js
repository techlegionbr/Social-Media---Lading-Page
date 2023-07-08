import {
  Container,
  Work,
  Arrow,
  ArrowTwo,
  Figure,
  Star,
  ArrowDown,
  Content,
} from "./styles";

//import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

import { FaEnvelope } from "react-icons/fa";

import works from "../../assets/work/work.png";
import vector from "../../assets/Vector.png";
import arrow from "../../assets/arrow.png";
import down from "../../assets/down.png";

import image1 from "../../assets/image1.svg";
import star from "../../assets/star.svg";

export function Main() {
  return (
    <Container>
      <section>
        <Content>
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
              {/*<FaEnvelope size={25} />*/}
              <input type="text" placeholder="Coloque um email válido" />
              <button>Enviar</button>
            </div>
          </div>

          <Arrow>
            <div>
              <img src={vector} alt="seta" />
            </div>
          </Arrow>

          <Figure>
            <div>
              <img src={image1} alt="" />
            </div>
          </Figure>

          <Star>
            <p>Túlio de Alves </p>
            <img src={star} alt="" />

            <div>
              <h6>
                “ Recomendo demais o serviço, tive suporte do começo ao fim do
                projeto, top d++ “
              </h6>
            </div>
          </Star>

          {/*
          <Figure>
            <div>
              <img src={image1} alt="" />
            </div>
          </Figure>

          <Star>
            <p>Túlio de Alves </p>
            <img src={star} alt="" />
            {/*<div>
         
            <img src={star} alt="" />
            </div>
           <div>
              <h6>
                “ Recomendo demais o serviço, tive suporte do começo ao fim do
                projeto, top d++ “
              </h6>
          </div>
          </Star>
    

          <Figure>
            <div>
              <img src={image1} alt="" />
            </div>
          </Figure>

          <Star>
            <p>Túlio de Alves </p>
            <img src={star} alt="" />
            {/*<div>
         
            <img src={star} alt="" />
            </div>
           <div>
              <h6>
                “ Recomendo demais o serviço, tive suporte do começo ao fim do
                projeto, top d++ “
              </h6>
          </div>
          </Star>
        */}
          <ArrowTwo>
            <div>
              <img src={arrow} alt="seta" />
            </div>
          </ArrowTwo>

          <ArrowDown>
            <div>
              <img src={down} alt="" />
            </div>
          </ArrowDown>
        </Content>

        <Work>
          <section>
           {/*<div className="circle" />*/} 
            <img src={works} alt="" />
          </section>
        </Work>
      </section>
    </Container>
  );
}
