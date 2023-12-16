import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";
import Offcanvas from "react-bootstrap/Offcanvas";

export const StyledNav = styled(Nav)`
  --bs-nav-pills-link-active-bg: ${secondaryColor};
  gap: 3rem;

  /* Estilos para pantallas más pequeñas que 992px */
  @media (max-width: 991px) {
    font-size: 1.8rem;
  }

  /* Estilos para pantallas desde 992px */
  @media (min-width: 992px) {
    gap: 2rem;
  }

  // .nav-item{
  //   margin-top:0.5rem
  // };
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
      padding: 0.5rem;
  color: ${fourthColor};

  &:hover {
    color: ${secondaryColor};
    text-decoration: underline;
  }
  &.active {
    color: ${fourthColor};
    text-decoration: None;

    padding: 0.5rem;
    background-color: ${secondaryColor};
    border-radius: 0.35rem;
  }
`;

export const NavStyles = styled.div`
  .navbar {
    background-color: #000000;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
  }


  
`;

export const StyledOffCanvas = styled(Offcanvas)`
  background-color: ${thirdColor};

  .offcanvas-title {
    color: white;
  }

  .offcanvas-body {
    background-color: ${primaryColor};
  }



  


`;

export const StyledNavLink = styled(Nav.Link)`
  &:hover {
    background-color: #9c9a9a;
  }
`;
