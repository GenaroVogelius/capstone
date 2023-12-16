import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { DatosDeContexto } from "../../Context/Context";
import Spinner from "../Loading/Spinner";
import { StyledNewRutinaBtn } from "./StyledNewRutinaBtn";

function NewRutinaBtn() {
  const { requestNewRutina, userInfo, setUserInfo } =
    useContext(DatosDeContexto);

  const [isrequestNuevaRutina, setIsrequestNuevaRutina] = useState(null);

  useEffect(() => {
    if (userInfo && isrequestNuevaRutina === null) {
      setIsrequestNuevaRutina(userInfo.solicitud_nueva_rutina);
    }
  }, [userInfo]);

  const [btnState, setBtnState] = useState({});

  const loadingState = () => {
    setBtnState((prev) => ({
      ...prev,
      loading: true,
      disabled: true,
    }));
  };

  useEffect(() => {
    // for default variables
    if (isrequestNuevaRutina === null) {
      loadingState();
    } else {
      setBtnState((prev) => ({
        ...prev,
        text: isrequestNuevaRutina
          ? "Has solicitado una rutina"
          : "Solicitar nueva rutina",
        loading: false,
        disabled: isrequestNuevaRutina ? true : false,
      }));
    }
  }, [isrequestNuevaRutina]);

  function triggerSweetAlert() {
    Swal.fire({
      title: "Estas seguro que quieres solicitar una nueva rutina?",
      icon: "warning",
      confirmButtonColor: "#189707",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        loadingState();
        toast.promise(requestNewRutina(), {
          loading: "Solicitando nueva rutina...",
          success: (data) => {
            setBtnState((prev) => ({
              ...prev,
              text: "Has solicitado una rutina",
              loading: false,
            }));
            setUserInfo((prev) => ({
              ...prev,
              solicitud_nueva_rutina: true,
            }));

            return `${data.message}`;
          },
          error: "Error",
        });
      }
    });
  }

  return (
    <StyledNewRutinaBtn>
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`request-rutina-btn ${btnState.loading ? "loading" : ""}`}
          disabled={btnState.disabled}
          onClick={() => triggerSweetAlert()}
        >
          {btnState.loading ? <Spinner /> : btnState.text}
        </button>
      </div>
    </StyledNewRutinaBtn>
  );
}

export default NewRutinaBtn;
