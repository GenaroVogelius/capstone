import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import { DatosDeContexto } from "../Context/Context";


const baseURL = "http://127.0.0.1:8000";

  export const useAxios = () => {
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

