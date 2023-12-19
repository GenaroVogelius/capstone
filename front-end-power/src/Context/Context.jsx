import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";

import {
  baseURL,
  carrouselAPI,
  getPromosAPI,
  getRutinaAPI,
  getServiciosAPI,
  getSesionesAPI,
  getUserInfoAPI,
  logUserEntranceAPI,
  loginUserAPI,
  requestNewRutinaAPI,
} from "../API_connections/API_connections";

export const DatosDeContexto = createContext();

export function ContextProvider(props) {
  const [completed, setCompleted] = useState(true);

  const toggleCompleted = (value) => {
    setCompleted(value);
  };

  // ? aca usas una call back function para que solamente se ejecute una vez y no cada vez que se monta el componente, que al ser un contexto seria siempre que naveges en la pagina.
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const [isPrecioScroller, setIsPrecioScroller] = useState(false);

  const [loading, setLoading] = useState(false);

  const [servicios, setServicios] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

  const [sesionesCount, setSesionesCount] = useState(null);

  const [carrouselPhotos, setCarrouselPhotos] = useState(null);

  const [dictDeRutinas, setDictDeRutinas] = useState({});

  const [userState, setUserState] = useState({});

  const useAxios = () => {
    const axiosInstance = axios.create({
      baseURL,
      headers: { Authorization: `Bearer ${authTokens?.access}` },
    });

    axiosInstance.interceptors.request.use(async (req) => {
      const user = jwt_decode(authTokens.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) {
        const response = await axios.post(`${baseURL}/api/token/refresh/`, {
          refresh: authTokens.refresh,
        });

        if (response.status === 200) {
          req.headers.Authorization = `Bearer ${response.data.access}`;
          return req;
        } else {
          // Handle unexpected response status, e.g., logout the user
          console.error("Unexpected status code:", response.status);
        }
      } else {
        console.log("las credenciales son antiguas");
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        setLoading(false);
      }
    });

    return axiosInstance;
  };

  const customAxios = useAxios();

  const loginUser = async (dni, password) => {
    setLoading(true);
    try {
      const { body } = await loginUserAPI(dni, password);
      setUser(jwt_decode(body.access));
      setAuthTokens(body);

      localStorage.setItem("authTokens", JSON.stringify(body));

      // creo que esto es medio al pedo
      await getUserInfo();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    setUserInfo((prev) => null);
    setSesionesCount(null);
  };

  const getServicios = async () => {
    setLoading(true);
    try {
      const { data } = await getServiciosAPI();
      setServicios(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const { data } = await getUserInfoAPI(user.DNI, customAxios);
      setUserInfo(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getPromos = async () => {
    setLoading(true);
    try {
      const { data } = await getPromosAPI();
      setPromos(data);
    } catch (error) {
    } finally {
    }
  };

  const [promos, setPromos] = useState();

  const getRutina = async (sesion) => {
    setLoading(true);
    try {
      const { data } = await getRutinaAPI(user.DNI, sesion);
      setDictDeRutinas((prevDict) => ({
        ...prevDict,
        [sesion]: data,
      }));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };


  const getSesiones = async () => {
    setLoading(true);
    try {
      const { data } = await getSesionesAPI(user.DNI);
      setSesionesCount(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };


  const requestNewRutina = async () => {
    try {
      const { message } = await requestNewRutinaAPI(user.DNI, authTokens);
      return message;
      // setSesionesCount(data);
    } catch (error) {
    } finally {
    }
  };

  const getCarrouselPhotos = async () => {
    try {
      const { photos } = await carrouselAPI();
      setCarrouselPhotos(photos);
      // setSesionesCount(data);
    } catch (error) {
    } finally {
    }
  };

  const logUserEntrance = async () => {
    try {
      const { state } = await logUserEntranceAPI(dni);
      setUserState(state);
      // setSesionesCount(data);
    } catch (error) {
    } finally {
    }
  };
  // useEffect(() => {
  //   if (!promos) {
  //       getPromos();
  //   }
  // }, []);
  // const isUserAuth = false

  // useEffect(() => {
  //   if (authTokens) {
  //     setUser(jwt_decode(authTokens.access));
  //   }
  //   setLoading(false);
  // }, [authTokens, loading]);

  return (
    <DatosDeContexto.Provider
      value={{
        authTokens,
        setUser,
        setAuthTokens,
        loginUser,
        getServicios,
        getUserInfo,
        servicios,
        logoutUser,
        userInfo,
        toggleCompleted,
        completed,
        user,
        loading,
        setLoading,
        getPromos,
        promos,
        getRutina,
        getSesiones,
        sesionesCount,
        requestNewRutina,
        setUserInfo,
        dictDeRutinas,
        baseURL,
        isPrecioScroller,
        setIsPrecioScroller,
        getCarrouselPhotos,
        carrouselPhotos,
        logUserEntrance,
      }}
    >
      {props.children}
    </DatosDeContexto.Provider>
  );
}
