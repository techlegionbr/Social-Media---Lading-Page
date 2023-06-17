//import { useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Banner } from "../../components/Banner";

import { Footer } from "../../components/Footer";
import { HomeContainer } from "../../styles/pages/HomeStyles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Main />
        <Banner />
        <Footer />
      </HomeContainer>
    </>
  );
}
