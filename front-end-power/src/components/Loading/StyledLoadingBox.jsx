

import styled from "styled-components";
import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";



export const StyledLoadingBox = styled.div`
  .loader-bar {
    width: 30%;
    height: 10px;
    border-radius: 5px;
    background: repeating-linear-gradient(
      45deg,
      ${primaryColor},
      ${secondaryColor} 100px
    );
    animation: loader-bar-animation 4s ease-in-out infinite;
  }

  @keyframes loader-bar-animation {
    0% {
      /* transform: translateX(-100%) rotate(270deg); */
      transform: translateX(-100%);
    }

    50% {
      /* transform: translateX(100%) rotate(-90deg); */
      transform: translateX(100%);
    }

    100% {
      /* transform: translateX(-100%) rotate(270deg); */
      transform: translateX(-100%);
    }
  }

  .load-1 .line:nth-last-child(1) {
    animation: loadingA 1.5s 1s infinite;
  }

  .load-1 .line:nth-last-child(2) {
    animation: loadingA 1.5s 0.5s infinite;
  }

  .load-1 .line:nth-last-child(3) {
    animation: loadingA 1.5s 0s infinite;
  }

  .load-2 .line:nth-last-child(1) {
    animation: loadingB 1.5s 1s infinite;
  }

  .load-2 .line:nth-last-child(2) {
    animation: loadingB 1.5s 0.5s infinite;
  }

  .load-2 .line:nth-last-child(3) {
    animation: loadingB 1.5s 0s infinite;
  }

  .load-3 .line:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
  }

  .load-3 .line:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
  }

  .load-3 .line:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
  }

  .load-4 .ring-1 {
    animation: loadingD 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  .load-5 .ball-holder {
    animation: loadingE 1.3s linear infinite;
  }

  .load-6 {
  display: flex;
  justify-content: center;
  }
  .load-6 .letter {
    animation-name: loadingF;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }

  .l-1 {
    animation-delay: 0.48s;
  }

  .l-2 {
    animation-delay: 0.6s;
  }

  .l-3 {
    animation-delay: 0.72s;
  }

  .l-4 {
    animation-delay: 0.84s;
  }

  .l-5 {
    animation-delay: 0.96s;
  }

  .l-6 {
    animation-delay: 1.08s;
  }

  .l-7 {
    animation-delay: 1.2s;
  }

  .l-8 {
    animation-delay: 1.32s;
  }

  .l-9 {
    animation-delay: 1.44s;
  }

  .l-10 {
    animation-delay: 1.56s;
  }

  .l-11 {
    animation-delay: 1.68s;
  }

  .load-7 .square {
    animation: loadingG 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  .load-8 .line {
    animation: loadingH 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  .load-9 .spinner {
    animation: loadingI 2s linear infinite;
  }

  .load-9 .bubble-1,
  .load-9 .bubble-2 {
    animation: bounce 2s ease-in-out infinite;
  }

  .load-9 .bubble-2 {
    animation-delay: -1s;
  }

  .load-10 .bar {
    animation: loadingJ 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  /*
  Set the color of the icon
*/

  .letter {
    float: left;
    font-size: calc(1.375rem + 1.5vw);
    color: ${secondaryColor};
  }

  @keyframes loadingA {
    0% {
      height: 15px;
    }

    50% {
      height: 35px;
    }

    100% {
      height: 15px;
    }
  }

  @keyframes loadingB {
    0% {
      width: 15px;
    }

    50% {
      width: 35px;
    }

    100% {
      width: 15px;
    }
  }

  @keyframes loadingC {
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, 15px);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes loadingD {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadingE {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadingF {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes loadingG {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }

    50% {
      transform: translate(70px, 0) rotate(360deg);
    }

    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes loadingH {
    0% {
      width: 15px;
    }

    50% {
      width: 35px;
      padding: 4px;
    }

    100% {
      width: 15px;
    }
  }

  @keyframes loadingI {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
  }

  @keyframes loadingJ {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(80px, 0);
      background-color: #f5634a;
      width: 25px;
    }
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%,
    100% {
      left: 100%;
    }
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }

    50%,
    100% {
      top: 100%;
    }
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }

    50%,
    100% {
      right: 100%;
    }
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }

    50%,
    100% {
      bottom: 100%;
    }
  }
`;

