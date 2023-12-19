import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
import { StyledNav } from "./StylesNav";
import { StyledLink } from "./StylesNav";
import { StyledNavLink } from "./StylesNav";
import React, { useEffect, useState, useContext } from "react";
import { DatosDeContexto } from "../../Context/Context";

function Links({ setShow }) {
  const [currentPath, setCurrentPath] = useState("");
  const { authTokens, logoutUser } = useContext(DatosDeContexto);

  useEffect(() => {
    if (currentPath != window.location.pathname) {
      setCurrentPath(window.location.pathname);
    }
  }, [window.location.pathname]);
  return (
    <StyledNav
      fill
      variant="pills"
      defaultActiveKey={currentPath}
      className="my-2 my-lg-0 flex-column flex-lg-row align-items-center"
    >
      <Nav.Item>
        <StyledLink
          className={currentPath === "/" ? "active" : ""}
          to="/"
          disabled={currentPath === "/"}
          style={{ cursor: currentPath === "/" ? "auto" : "pointer" }}
          
        >
          Sobre Nosotros{" "}
        </StyledLink>
      </Nav.Item>
      <Nav.Item>
        <StyledLink
          to="/promos"
          // no podes poner setShow(false) ni handCloase(false) porque se reinicia toda la pagina.
          className={currentPath === "/promos" ? "active" : ""}
          disabled={currentPath === "/promos"}
          style={{ cursor: currentPath === "/promos" ? "auto" : "pointer" }}
        >
          Promos{" "}
        </StyledLink>
      </Nav.Item>
      <Nav.Item>
        <StyledLink
          to="/soySocio"
          className={currentPath === "/soySocio" ? "active" : ""}
          disabled={currentPath === "/soySocio"}
          style={{ cursor: currentPath === "/soySocio" ? "auto" : "pointer" }}
        >
          Soy Socio{" "}
        </StyledLink>
      </Nav.Item>
      {authTokens && (
        <Nav.Item>
          <StyledLink onClick={() => logoutUser()} to="/soySocio">
            Cerrar Sesión
          </StyledLink>
        </Nav.Item>
      )}
    </StyledNav>
  );
}

export default Links;
