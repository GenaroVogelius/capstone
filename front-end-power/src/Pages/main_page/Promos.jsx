import React, { useContext, useEffect, useState } from "react";
import { DatosDeContexto } from "../../Context/Context";
import useScrollToTop from "../../Utils/CustomsHooks";
import Heading from "../../components/Heading/Heading";
import Precios from "../../components/Precios/Precios";
import SkeletonPrecios from "../../components/Precios/SkeletonPrecios";
const Promos = () => {
  useScrollToTop();

  const { getPromos, promos, completed } = useContext(DatosDeContexto);

  const second_word = "Promociones";
  const first_word = "Nuestras";

  const [promociones, setPromociones] = useState(false);

  useEffect(() => {
    if (promos) {
      setPromociones(promos);
    }
  }, [promos]);

  useEffect(() => {
    if (!promos) {
      getPromos();
    }
  }, []);

  return (
    <div style={{ marginTop: "4rem" }}>
      <Heading
        second_word={second_word}
        first_word={first_word}
        paddingtop="1rem"
      />
      {promociones ? (
        <Precios promociones={promociones} completed={completed} />
      ) : (
        <SkeletonPrecios />
      )}
    </div>
  );
};

export default Promos;
