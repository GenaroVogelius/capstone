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
  const { viewPdf } = useContext(DatosDeContexto);



  const handleClick = () => {
      viewPdf()
    };

  

  return (
    <StyledNewRutinaBtn>
      <div className="d-flex justify-content-center">
        <button className="request-rutina-btn" onClick={handleClick}>
          <i className="far fa-file-pdf"></i> Ver en PDF
        </button>
      </div>
    </StyledNewRutinaBtn>
  );
}

export default PdfBtn;
