import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 24px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    position: absolute;
    width: 649px;
    height: 73px;
    left: 120px;
    top: 1770px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  > section {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 15px;
    color: #000;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 367px;
  height: 563px;
  left: 50px;
  top: 200px;
  margin-bottom: 800px;
  background: #fff;
  border-radius: 12px;
`;
