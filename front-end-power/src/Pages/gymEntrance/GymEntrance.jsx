import { useEffect, useState } from "react";

import Spans from "../../components/Asthetics/Spans";
import LoadingBox from "../../components/Loading/LoadingBox";
import { StyledLogInBox } from "./StyledLogInBox";
// import Shadow from "../../components/Loading/HorizontalLoading";
import EntranceForm from "../../components/LogIn/EntranceForm";
import NotFound from "../../components/NotFound";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";

import "../../style/css/style.css";

function gymEntrance() {
  const [userData, setUserData] = useState(null);
  const [background, setBackground] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      setBackground("linear-gradient(rgb(0 0 0), rgb(229 116 7))");
    } else if (userData && userData.activo) {
      setBackground("linear-gradient(rgb(47 167 4), rgb(96 235 5))");
      setShowWelcome(true);
    } else if (userData && !userData.activo) {
      setBackground("linear-gradient(rgb(155 3 3), rgb(240 7 7))");
      setShowWelcome(true);
    } else if (notFound) {
      setBackground("linear-gradient(rgb(200 189 5), rgb(240 225 7))");
    }

    if (!isLoading) {
      timer = setTimeout(() => {
        setBackground("linear-gradient(#f0f0f0, #d4d4d4)");
        setShowWelcome(false);
        setNotFound(false);
        setUserData(null);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  // useEffect(() => {
  //   // ! ver por que tenes que aplicar asi
  //   document.getElementsByClassName("background")[0].style.background =
  //     background;
  //   document.body.style.background = background;
  // }, [background]);

  // ? en react si pones autofocus es Focus con la f en mayuscula a diferencia de html

  // esto si encuentra al user
  if (showWelcome) {
    const today = new Date();
    const vencimiento = userData.vencimiento;
    const timeDiff = new Date(vencimiento) - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // tuviste que ponerle +1 porque sino no te daba

    return (
      <div className="login-box">
        <Spans></Spans>
        <Title data={{ sexo: userData.sexo, nombre: userData.nombre }} />
        <Subtitle
          data={{
            activo: userData.activo,
            vencimiento: userData.vencimiento,
            daysDiff,
          }}
        />
      </div>
    );
  }

  // esto si no encuentra al usuario
  else if (notFound) {
    return <NotFound></NotFound>;
  }

  // esto es lo que te devuelve por defecto, osea la pagina inicial, que se subdivide a cuando esta cargando y cuando no.
  else {
    return (
      <>
        {isLoading && <LoadingBox />}
        <StyledLogInBox>
          <Spans></Spans>
          <h1>Admisión Power Gym</h1>
          <EntranceForm {...{ setUserData, setNotFound, setIsLoading }} />
        </StyledLogInBox>
      </>
    );
  }
}

export default gymEntrance;
