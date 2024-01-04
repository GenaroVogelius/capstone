import { useEffect, useState } from "react";
import Spans from "../../components/Asthetics/Spans";
import LoadingBox from "../../components/Loading/LoadingBox";
import { StyledLogInBox } from "./StyledLogInBox";
import BackGroundShadow from "../../components/BackGroundShadow/BackGroundShadow";
import EntranceForm from "../../components/LogIn/EntranceForm";

function gymEntrance() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setUserData(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [userData]);

  // ? en react si pones autofocus es Focus con la f en mayuscula a diferencia de html



  const userActiveColor = "linear-gradient(rgb(47 167 4), rgb(96 235 5))";
  const userInactiveColor = "linear-gradient(rgb(155 3 3), rgb(240 7 7))";
  const userNotFoundColor = "linear-gradient(rgb(200 189 5), rgb(240 225 7))";

  console.log(userData?.sexo);
  console.log(userData && userData.sexo);
  return (
    <>
      {isLoading && <LoadingBox />}
      {userData && (
        <BackGroundShadow
          backgroundColor={
            userData.activo
              ? userActiveColor
              : userData.activo === false
              ? userInactiveColor
              : userNotFoundColor
          }
        />
      )}
      <StyledLogInBox>
        <Spans></Spans>
        <h1>Admisión Power Gym</h1>
        {userData?.not_found ? (
          <h3>No se ha encontrado el usuario en la base de datos</h3>
        ) : userData?.nombre ? (
          <div>
            <h2>
              {(userData.sexo === "Masculino" ? "Bienvenido" : "Bienvenida")}{" "}
              {userData.nombre}
            </h2>
            <h3>
              Tu cuota {userData.days_to_vencimiento < 0 ? "venció" : "vence"} el {userData.vencimiento} ({userData.days_to_vencimiento} días)
            </h3>
          </div>
        ) : (
          <EntranceForm {...{ setUserData, setIsLoading }} />
        )}
      </StyledLogInBox>
    </>
  );
}

export default gymEntrance;
