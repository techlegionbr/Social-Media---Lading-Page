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

  > section {
    width: 100%;
    padding: 64px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  @media(max-width: 1000px) {
    height: auto;

    > section {
      gap: 60px;
      flex-direction: column;
    }
  }

  @media(max-width: 700px) {
    > section {
      padding: 64px 16px;
      padding-bottom: 40px;
      gap: 40px;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 755px;
  display: flex;
  flex-direction: column;


  > h1 {
    font-size: 48px;
    font-family: 'Chivo', sans-serif;
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

    /*
    button {
      background: linear-gradient(90.95deg, #2FDA2B 11.11%, #3CA63A 85.65%);
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
        border: 1px solid #2E332E;
      }
    }
  }

  @media(max-width: 1360px) {
    max-width: 500px;
  }

  @media(max-width: 1000px) {
    max-width: 100%;

    > div {
      margin-right: 0px;
    }
  }

  @media(max-width: 700px) {
   

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

*/




  > div {
    display:flex;
    align-items: center;
    transition: .5s;
   //+ margin-bottom: ${props => props.results ? '-3rem' : '0'};

    input {
     /* border: none;
      padding: 1.3rem;
      font-size: 1.3rem;
      width: 33rem;
      height: 1rem;
     // border-radius: 1rem 0 0 1rem;
     border-radius: 12px;
   
    color: #D9D9D9;
*/

      box-sizing: border-box;

     // position: absolute;
      width: 463px;
      height: 50px;
      left: 60px;
      top: 400px;

      background: #FFFFFF;
      border: 1px solid #1E1E1E;
      border-radius: 12px;


      &::placeholder {
        color: #cecece;
      }
    }

    button {
    /*background: #0061FF;
      border: none;
      height: 2.7rem;
      width: 6rem;
    //  border-radius: 0 1rem 1rem 0;
    border-radius: 12px;
    margin: 10px;
      cursor: pointer;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

    */
    // position: absolute;
      width: 121px;
      height: 50px;
      left: 540px;
      top: 355px;
      cursor: pointer;
      color: #fff;
      background: #0061FF;
      border-radius: 12px;
      margin-left: 10px;
          
    }
  }

  @media(max-width:768px) {
    h2 {
      font-size: 1.8rem;
      margin: 2rem 0;
    }

    > div {
      /* margin-bottom: ${props => props.results ? '15rem' : '0'}; */

      input {
        padding: 1rem;
        font-size: .9rem;
        width: calc(80vw - 4rem);
      }
      button{
        padding: 1rem;
        font-size: .9rem;
       
      }

    }
  }

  @media(max-width:500px) {
    > div input {
      width: calc(90vw - 4rem);

      &::placeholder {
        font-size: .7rem;
      }
    }
  }
}
`;



export const HeadsetsContainer = styled.div`
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

   

 
  @media(max-width: 700px) {
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


