import styled from "styled-components";
import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";

export const StyledNewRutinaBtn = styled.div`
  .request-rutina-btn {
    padding: 0.8em 1.8em;
    border: 2px solid ${secondaryColor};
    position: relative;
    background-image: linear-gradient(
      144deg,
      ${thirdColor},
      ${primaryColor} 70%,
      #969696
    );
    overflow: hidden;

    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.3s;
    z-index: 1;
    font-family: inherit;
    color: ${fourthColor};

    &::before {
      content: "";
      width: 0;
      height: 335%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: ${fourthColor};
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    &:hover::before {
      width: 105%;
    }

    &:hover {
      color: ${primaryColor};
      text-decoration: solid;
    }
  }

  .loading {
    padding: 1.6em 4.9em;
  }
  .far{
    margin-right: 1rem;
    font-size: 21px;
  }
`;
