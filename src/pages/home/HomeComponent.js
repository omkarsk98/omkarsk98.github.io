import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

function Home(props) {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
    </>
  );
}

export default Home;
