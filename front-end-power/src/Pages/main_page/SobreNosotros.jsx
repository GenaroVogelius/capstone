import React from "react";

import useScrollToTop from "../../Utils/CustomsHooks";
import Carousel from "../../components/Carousel/CarouselCustom";
import Heading from "../../components/Heading/Heading";
import ServicesCards from "../../components/ServicesCards/ServicesCards";

// import TablaAbogado from "../../../components/Tablas/TablaCausas.jsx";
// import Footer from "../../../components/Footer/Footer.jsx";
// import "./InicioAbogado.css";

const SobreNosotros = () => {
  useScrollToTop();

  const second_word = "Nosotros";
  const first_word = "Por qué";
  return (
    <div>
      <Carousel />
      <div style={{ marginTop: "1rem" }}>
        <Heading second_word={second_word} first_word={first_word} />
        <ServicesCards />
      </div>
    </div>
  );
};

export default SobreNosotros;
