import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Banner } from "../../components/Banner";
import { CardContents } from "../../components/CardContents";
import { Footer } from "../../components/Footer";
import { HomeContainer } from "../../styles/pages/HomeStyles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Main />
        <Banner />
        <CardContents />
        <Footer />
      </HomeContainer>
    </>
  );
}
