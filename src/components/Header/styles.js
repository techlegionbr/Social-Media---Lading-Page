import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background: #0c1137;
  margin: 10px;
  padding: 2rem;

  align-items: center;
  justify-content: space-around;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 100%;

      position: absolute;
      width: 52px;
      height: 52px;
      left: 146px;
      top: 16px;

      //background: url(image.png);

      @media (max-width: 500px) {
        width: 120px;
      }
    }

    > nav {
      display: flex;
      gap: 1rem;

      a {
        font-size: 20px;
        position: relative;

        &:before {
          content: "";
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: #00dbff;
          transition: 0.3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    .mobile {
      display: none;
    }

    @media (max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 14.5px 16px;
  }
`;
