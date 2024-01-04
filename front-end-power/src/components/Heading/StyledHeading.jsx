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
    padding-top: ${(props) => props.paddingtop || "0"};
  }

  .site-heading h2 span {
    color: ${secondaryColor};
  }

  .site-heading h4 {
    display: inline-block;
    position: relative;
    z-index: 1;
  }

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
