import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  padding-right: 2px;
  left: 200px;

  width: 900px;
  height: 500px;
  margin: 50px;

  > section {
    margin: 50px;

    padding: 30px;
    display: flex;
  }

  /* img{

    padding-left: 80%;

    margin: 80px;

    transform: rotate(-18.62deg);
}*/

  h2 {
    width: 560px;
    height: 310px;

    font-family: "Roboto";

    font-weight: 700;
    font-size: 40px;
    line-height: 59px;
    display: flex;
    align-items: center;

    color: #0061ff;
  }

  p {
    width: 319px;
    height: 50px;
    left: 165px;
    padding: 12px;
    margin-top: -3rem;
    background: #0061ff;
    border-radius: 12px;
  }
`;

