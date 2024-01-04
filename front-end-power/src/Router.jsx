import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./Pages/errorPage/errorPage";

import Promos from "./Pages/main_page/Promos";
import SobreNosotros from "./Pages/main_page/SobreNosotros";

import React, { useContext } from "react";
import { DatosDeContexto } from "./Context/Context";
import GymEntrance from "./Pages/gymEntrance/GymEntrance";
import LogIn from "./Pages/main_page/LogIn";
import SoySocio from "./Pages/main_page/SoySocio";
import CommonComponents from "./components/CommonComponets/CommonComponents";

const SoySocioOrLogIn = () => {
  const { authTokens} =
    useContext(DatosDeContexto);

  return authTokens ? <SoySocio /> : <LogIn />;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CommonComponents>
        <SobreNosotros />
      </CommonComponents>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/promos",
    element: (
      <CommonComponents>
        <Promos />
      </CommonComponents>
    ),

    errorElement: <ErrorPage />,
  },
  {
    path: "/soySocio",
    element: (
      <CommonComponents>
        <SoySocioOrLogIn />
      </CommonComponents>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/entrada",
    element: <GymEntrance />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
