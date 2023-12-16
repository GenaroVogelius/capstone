import Offcanvas from "react-bootstrap/Offcanvas";
import { StyledOffCanvas } from "./StylesNav";
import Links from "./Links"

function OffCanvas({ toggleAccordion, handleClose, show }) {
  return (
    <StyledOffCanvas onClick={toggleAccordion} show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu Principal</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Links />
      </Offcanvas.Body>
    </StyledOffCanvas>
  );
}

export default OffCanvas;

