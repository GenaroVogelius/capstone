import styled from "styled-components";
import {
  appearAnimation,
  secondaryColor,
} from "../../StyleVariables/StyleVariables";

export const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  .site-heading h2 {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
  }

  .site-heading h2 span {
    color: ${secondaryColor};
  }

  .site-heading h4 {
    display: inline-block;
    position: relative;
    z-index: 1;
  }

  /* .site-heading h4::before {
    background: ${secondaryColor} none repeat scroll 0 0;
    bottom: 0;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -25px;
    position: absolute;
    width: 50px;
  } */

  .site-heading {
    overflow: hidden;
    margin-top: -5px;
    display: flex;
    flex-direction: column;
    max-width: 15rem;
  }

  .animationOn {
    ${appearAnimation}
  }
`;
