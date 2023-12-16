import { requestNewRutinaAPI } from "../../API_connections/API_connections";

import { toast } from "sonner";
import Swal from "sweetalert2";
import Spinner from "../Loading/Spinner";

// TODO importar bien esto
import { StyledLink } from "../nav/StylesNav"
import { StyledNewRutinaBtn } from "../NewRutinaBtn/StyledNewRutinaBtn"
import { useContext } from "react";
import { DatosDeContexto } from "../../Context/Context";

function PdfBtn() {
  const { baseURL, user } = useContext(DatosDeContexto);
  const dni = user ? user.DNI : ""


  const handleClick = () => {
      window.open("http://127.0.0.1:8000/pdf_view/1", "_blank");
    };

  

  return (
    <StyledNewRutinaBtn>
      <div className="d-flex justify-content-center">
        <button className="request-rutina-btn" onClick={handleClick}>
          <i class="far fa-file-pdf"></i> Ver en PDF
        </button>
      </div>
    </StyledNewRutinaBtn>
  );
}

export default PdfBtn;
