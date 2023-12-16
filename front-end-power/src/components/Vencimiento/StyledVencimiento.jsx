import styled from "styled-components";
import {
  appearAnimation,
  fourthColor,
  primaryColor,
} from "../../StyleVariables/StyleVariables";

export const StyledVencimiento = styled.div`
  .card {
    padding: 1rem;
    background-color: ${fourthColor};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    max-width: 320px;
    border-radius: 20px;
    margin-top: 1rem;

    .d-flex {
      gap: 1rem;
    }
  }

  .title {
    display: flex;
    align-items: center;
  }

  p {
    color: ${primaryColor};
  }

  /* ! CAMBIASTE ESTO */
  /* span {
    position: relative;
    padding: 0.5rem;
    background-color: #10b981;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
  } */

  span svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    height: 1rem;
  }

  .percent {
    font-weight: 600;
    display: flex;
  }

  .data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .data p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${primaryColor};
    line-height: 2.5rem;
    font-weight: 700;
    text-align: left;
  }

  .data .range {
    position: relative;
    background-color: #e5e7eb;
    width: 100%;
    height: 0.5rem;
    border-radius: 0.25rem;

    .fill {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      height: 100%;
      border-radius: 0.25rem;
    }
  }

  .animationOn {
    ${appearAnimation}
  }
`;
