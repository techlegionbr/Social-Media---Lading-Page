import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #0c1137;

 
padding: 1rem 64px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 25rem;
    }

    > img {
        width: 52px;
        height: 52px;
        left: 146px;
        top: 16px;

      @media(max-width: 500px) {
        width: 120px;
      }
    }

    > nav {
      display: flex;
      gap: 2rem;
      align-items: center;
      
    

      a {
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: #0061FF;
          transition: .3s;
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

    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 14.5px 16px;
  }
`;