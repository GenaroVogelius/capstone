import styled, { keyframes, css } from "styled-components";

// Define style variables
export const secondaryColor = "#ff5e14";
export const primaryColor = "#151414";
export const thirdColor = "#4e4e4e";
export const fourthColor = "#ffffff";

const appearAnimationKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const appearAnimation = css`
  animation-duration: 0.45s;
  animation-name: ${appearAnimationKeyframe};
  animation-timing-function: ease-in-out;
  animation-delay: 0.15s;
`;
