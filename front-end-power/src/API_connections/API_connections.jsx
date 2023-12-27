import axios from "axios";
import { toast } from "sonner";


// export const baseURL = import.meta.env.DEV
//   ? import.meta.env.DEVELOP_URL_ENV
//   : import.meta.env.BUILD_URL_ENV;
// export const baseURL ="http://127.0.0.1:8000/" 
// export const baseURL = "https://power-gym.com.ar/"
// export const baseURL = "https://qfshmg27-8000.brs.devtunnels.ms/";
export const baseURL = "https://vps-3503468-x.dattaweb.com/"

function handleErrors(error) {
  if (error.response) {
    // The request was made, and the server responded with a status code that falls out of the range of 2xx.
    if (error.response.status === 400) {
      console.log("Bad Request:", error.response.data);
      return { error: "Bad Request" };
    } else if (error.response.status === 401) {
      toast.error(error.response.data.detail);
    }
  } else if (error.request) {
    // The request was made, but no response was received, or there was a network error.
    toast.error("Ups, el servidor se encuentra caido, disculpe las molestias");
  } else {
    // Something happened in setting up the request that triggered an error.
    console.log("Request Error:", error.message);
    return { error: "Request Error" };
  }
}

export async function loginUserAPI(dni, password) {
  try {
    const response = await axios.post(
      `${baseURL}api/token/`,
      {
        username: dni,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { body: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function getServiciosAPI() {
  try {
    const response = await axios.get(`${baseURL}servicios/`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return { data: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function getUserInfoAPI(dni, customAxios) {
  try {
    const response = await customAxios.get(`${baseURL}usuario/${dni}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return { data: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function getPromosAPI() {
  try {
    const response = await axios.get(`${baseURL}tarifas/`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return { data: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function getRutinaAPI(dni, sesion, authTokens) {
  try {
    const response = await axios.get(`${baseURL}rutina/${dni}/${sesion}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens?.access}`,
      },
    });;
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return { data: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function getSesionesAPI(dni, authTokens) {
  try {
    const response = await axios.get(`${baseURL}sesiones/${dni}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens?.access}`,
      },
    });

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return { data: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function requestNewRutinaAPI(dni, authTokens) {
  try {
    const response = await axios.post(
      `${baseURL}requestRutine/`,
      {
        userDNI: dni,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens?.access}`,
        },
      }
    );
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    return { message: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function carrouselAPI() {
  try {
    const response = await axios.get(`${baseURL}carrousel/`);
    return { photos: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}

export async function logUserEntranceAPI(dni) {
  try {
    const response = await axios.get(`${baseURL}admin_usuario/${dni}`);
    return { userData: response.data };
  } catch (error) {
    return handleErrors(error);
  }
}


export async function viewPdfAPI(dni, authTokens) {
  try {
    const response = await fetch(`${baseURL}/pdf_view/${dni}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens?.access}`,
      },
    });

    if (!response.ok) {
      // Handle error response
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Read the response as a blob
    const pdfBlob = await response.blob();

    // Create a Blob URL
    const pdfBlobUrl = URL.createObjectURL(pdfBlob);

    // Open the PDF in a new tab
    window.open(pdfBlobUrl, "_blank");
  } catch (error) {
    return handleErrors(error);
  }
}
