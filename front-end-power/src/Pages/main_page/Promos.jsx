import React, { Suspense } from "react";
import NavMain from "../../components/nav/NavMain";
import Carousel from "../../components/Carousel/CarouselCustom";
import Footer from "../../components/Footer/Footer";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import Precios from "../../components/Precios/Precios";
import useScrollToTop from "../../Utils/CustomsHooks";
import Layout from "../../components/Layout/Layout";
import Heading from "../../components/Heading/Heading";
import LoadingBox from "../../components/Loading/LoadingBox.jsx";
import { useContext, useEffect, useState } from "react";
import { DatosDeContexto } from "../../Context/Context";
import SkeletonPrecios from "../../components/Precios/SkeletonPrecios";



const Promos = () => {
  useScrollToTop();

  

  const {
    getPromos,
    promos,
    user,
    setLoading,
    defaultPromosValue,
    isPrecioScroller,
    setIsPrecioScroller,
    completed
  } = useContext(DatosDeContexto);

  const second_word = "Promociones";
  const first_word = "Nuestras";

  
  const promociones = promos ? promos : Array(5).fill(0);

  useEffect(() => {
    if (!promos) {
      getPromos();
    }
  }, []);

  return (
    <div style={{ marginTop: "4rem" }}>
      <Heading second_word={second_word} first_word={first_word} />
      <Precios
        promociones={promociones}
        isPrecioScroller={isPrecioScroller}
        setIsPrecioScroller={setIsPrecioScroller}
        completed={completed}
      />
      {/* /* {isPromosDefault ? <LoadingBox /> : ""} */}
    </div>
  );
};

export default Promos;
