import styled from "styled-components";

export const Container = styled.div`
  background-size: 50%;

  height: 640px;
  width: 100%;
  position: relative;

  > section {
    width: 100%;
    padding: 64px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  @media (max-width: 1000px) {
    height: auto;

    > section {
      gap: 60px;
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    > section {
      padding: 64px 16px;
      padding-bottom: 40px;
      gap: 40px;
    }
  }
`;

export const Contents = styled.div`
  max-width: 755px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 48px;
    font-family: "Chivo", sans-serif;
    display: block;
    margin-bottom: 24px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 24px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 100px;
    gap: 24px;

    button {
      background: linear-gradient(90.95deg, #0c1137 11.11%, #4b56ab 85.65%);
      border-radius: 16px;
      color: #fff;
      padding: 13px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      font-size: 20px;
      height: 56px;
      width: 100%;

      &:last-child {
        background: none;
        border: 1px solid #2e332e;
      }
    }
  }

  @media (max-width: 1360px) {
    max-width: 500px;
  }

  @media (max-width: 1000px) {
    max-width: 100%;

    > div {
      margin-right: 0px;
    }
  }

  @media (max-width: 700px) {
    > strong {
      font-size: 20px;
    }

    > h1 {
      font-size: 32px;
    }

    > p {
      font-size: 14px;
    }

    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const ServiceContainer = styled.div`
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
      width: 230px;
    }
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
`;
