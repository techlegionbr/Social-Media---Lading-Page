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
    gap: 150px;
    color: #000;
  }

  h2 {
    font-size: 30px;
    color: #0061ff;
  }

  p {
    font-size: 20px;
  }

  .arrow-down {
    display: none;
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
        max-width: 280px;
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