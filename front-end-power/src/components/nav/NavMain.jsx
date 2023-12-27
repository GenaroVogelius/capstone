import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import { useState } from "react";
import Image from "react-bootstrap/Image";
import Links from "./Links";
import OffCanvas from "./OffCanvas";
import { NavStyles } from "./StylesNav";
import logoIcon from "../../assets/favicon.ico";

function NavMain() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <NavStyles>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src={logoIcon}
              alt="Logo Power"
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={toggleAccordion}
          />
          <Navbar.Collapse
            id="navbarScroll"
            className=" d-none d-lg-block d-flex justify-content-end"
          >
            <Links />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && (
        <OffCanvas
          show={show}
          handleClose={handleClose}
          toggleAccordion={toggleAccordion}
        />
      )}
    </NavStyles>
  );
}

export default NavMain;
