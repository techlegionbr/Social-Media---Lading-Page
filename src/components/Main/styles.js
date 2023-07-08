import styled from "styled-components";

export const Container = styled.div`
  background: #0c1137;
  height: 640px;
  width: 100%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }

  .circle {
    height: 6rem;
    width: 6rem;
    background: #00dbff;
    border-radius: 999px;
    position: absolute;
    right: 60px;
  }

  > section {
    width: 100%;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const Content = styled.div`
  max-width: 755px;
  display: flex;
  flex-direction: column;

  > h1 {
    width: 85%;
    font-size: 30px;
    font-family: "Chivo", sans-serif;
    display: block;
    margin-bottom: 24px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 24px;
    width: 60%;
    color: #C2C0C0;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 100px;
    gap: 24px;

    > div {
      display: flex;
      align-items: center;
      transition: 0.5s;

      input {
        box-sizing: border-box;
        width: 463px;
        height: 50px;
        left: 60px;
        background: #ffffff;
        border: 1px solid #1e1e1e;
        border-radius: 12px;
        text-align: center;

        &::placeholder {
          color: #cecece;
        }
      }
    }

    button {
      width: 121px;
      height: 50px;
      left: 540px;
      top: 355px;
      cursor: pointer;
      color: #fff;
      background: #0061ff;
      border-radius: 12px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      margin: 2rem 0;
    }

    > div {
      input {
        padding: 1rem;
        font-size: 0.9rem;
        width: calc(80vw - 4rem);
      }
      button {
        padding: 1rem;
        font-size: 0.9rem;
      }
    }
  }
`;

export const Work = styled.div`
  display: flex;
  gap: 130px;
  height: 520px;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 100%;
    }

    @media (max-width: 700px) {
      height: 340px;
      gap: 0px;
      justify-content: space-around;

      > section {
        > img {
          width: 100px;
          margin-top: auto;
        }
      }
    }
  }
`;

export const Arrow = styled.div`
  position: relative;
  left: 64%;
  right: 37%;
  width: 6%;
  height: 6%;
  left: 1px;
  top: 90px;
  margin-top: 4rem;
  flex-direction: column;
  text-align: center;
`;

export const Figure = styled.div`
  position: relative;
  width: 15%;
  height: 15%;
  left: 40px;
  top: 30px;
  border-radius: 999px;
`;

export const Star = styled.div`
  p {
    padding-left: 110px;
    margin: -10px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    line-height: 14px;
    color: #c2c0c0;
  }

  img {
    width: 56%;
    height: 56%;
    margin-left: -339px;
    margin-top: 1px;
    position: relative;
    left: -10px;
    top: 4px;
  }

  h6 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    left: 40px;
    top: -18px;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 14px;
    color: #fff;
    margin-bottom: -50px;
  }
`;

export const ArrowTwo = styled.div`
  position: relative;
  left: 64%;
  right: 37%;
  top: 150px;
  width: 11%;
  height: 11%;
  left: 315px;
  top: -114px;
  margin: 5rem;
`;

export const ArrowDown = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 600px;
  margin-left: 300px;
  img {
    width: 112px;
    height: 112px;
  }
`;
