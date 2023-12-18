import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { DatosDeContexto } from "../../Context/Context";
import useScrollToTop from "../../Utils/CustomsHooks";
import AccordionCustom from "../../components/Accordion/AccordionCustom";
import Heading from "../../components/Heading/Heading";
import RutinaHeading from "../../components/Heading/RutinaHeading";
import HorizontalLoading from "../../components/Loading/HorizontalLoading";
import NewRutinaBtn from "../../components/NewRutinaBtn/NewRutinaBtn";
import PdfBtn from "../../components/PdfBtn/PdfBtn";
import Rutina from "../../components/Rutina/Rutina";
import Vencimiento from "../../components/Vencimiento/Vencimiento";

function SoySocio() {
  useScrollToTop();
  const { getUserInfo, userInfo, sesionesCount } =
    useContext(DatosDeContexto);

  const hasRoutine = !sesionesCount ? (
    <HorizontalLoading />
  ) : sesionesCount.sesiones.length > 0 ? (
    true
  ) : (
    false
  );

  console.log(hasRoutine);

  useEffect(() => {
    if (userInfo) {
      return;
    }
    getUserInfo();
  }, []);

  const daysDiff = () => {
    if (!userInfo) {
      return "";
    }
    return userInfo.days_to_vencimiento;
  };

  const formattedDateString = () => {
    if (!userInfo) return <Skeleton />;
    return userInfo.vencimiento;
  };

  const cuotaState = () => {
    if (!userInfo) return <Skeleton />;
    const dias_al_vencimiento = daysDiff();
    if (dias_al_vencimiento > 5) {
      return { state: "al dia", color: "rgb(15 174 4)" };
    } else if (dias_al_vencimiento > 0) {
      return { state: "cercana al vencimiento", color: "#e6af0b" };
    } else {
      return { state: "vencida", color: "#ed0303" };
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="d-flex justify-content-around flex-column flex-lg-row align-items-center"
          style={{ marginTop: "5rem" }}
        >
          <Heading
            subHeading={cuotaState}
            second_word={
              userInfo ? (
                userInfo.nombre
              ) : (
                <Skeleton style={{ maxWidth: "9rem" }} />
              )
            }
            first_word={"Hola"}
          />
          <Vencimiento
            daysDiff={daysDiff()}
            cuotaState={cuotaState().color}
            formattedDateString={formattedDateString()}
          />
        </div>
        {/* <RutinaHeading text={rutinaHeading} /> */}
        {hasRoutine &&
          <AccordionCustom prop={<Rutina />} />}
        {hasRoutine || <RutinaHeading text={"No tienes sesiones cargadas"} />}
        <NewRutinaBtn />
        {hasRoutine && <PdfBtn />}
      </div>
    </>
  );
}

export default SoySocio;
