import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  padding-right: 2px;
  left: 200px;
  box-shadow: 10px 10px 10px #0061ff;
  width: 900px;
  height: 450px;
  margin: 30px;
  margin-bottom: 200px;

  > section {
    margin: 200px;
    padding: 30px;
    display: flex;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-left: 200px;
    position: relative;
    top: -15px;
    transform: rotate(-18.62deg);
  }

  h2 {
    position: absolute;
    width: 460px;
    height: 319px;
    left: 60px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #0061ff;
  }

  p {
    position: absolute;
    width: 300px;
    height: 45px;
    left: 63px;
    display: flex;
    font-size: 1rem;
    padding: 12px;
    margin-top: 17rem;
    background: #0061ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
