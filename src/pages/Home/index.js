import { HomeContainer } from "../../styles/pages/HomeStyles";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { useState } from "react";

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Main />
        <Footer />
      </HomeContainer>
    </>
  );
}
