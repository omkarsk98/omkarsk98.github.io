import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  const { role = "sde" } = useParams();
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
