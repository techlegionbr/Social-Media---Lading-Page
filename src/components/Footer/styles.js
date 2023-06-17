import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 24px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  > section {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 15px;
    color: #000;
    padding: 24px 70px;
  }

  h3 {
    color: #0061ff;
  }

  > div {
    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 16px;

      > img {
        width: 100px;
        height: 100px;
        left: 160px;
        top: 16px;

        @media (max-width: 500px) {
          width: 120px;
        }
      }

      h2 {
        font-size: 25px;

        color: #0061ff;
      }
    }
  }

  @media (max-width: 1250px) {
    flex-direction: column;

    > section {
      gap: 60px;
    }

    > div {
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        max-width: 80px;
        text-align: center;
      }

      br {
        display: none;
      }

      .arrow-right {
        display: none;
      }

      .arrow-down {
        display: block;
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 850px) {
    > section {
      gap: 48px;
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    padding: 64px 16px;
  }
`;
