import styled from "styled-components";
import {
  fourthColor,
  primaryColor,
  secondaryColor,
} from "../../StyleVariables/StyleVariables";

export const StyledLogInBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  padding: 3rem;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background: ${primaryColor};
  overflow: hidden;

  h2 {
    font-size: 3rem;
    margin: 0 0 30px;
    padding: 0;
    color: ${secondaryColor};
    text-align: center;
  }

  h1 {
    margin: 0 0 30px;
    padding: 0;
    color: ${secondaryColor};
    text-align: center;
    font-size: 4rem;
  }

  span {
    position: absolute;
    display: block;

    &:nth-child(1) {
      top: 0.1rem;
      left: -100%;
      width: 100%;
      height: 0.3rem;
      background: linear-gradient(90deg, transparent, ${secondaryColor});
      animation: btn-anim1 5s linear infinite;
    }

    &:nth-child(2) {
      top: -100%;
      right: 0.1rem;
      width: 0.3rem;
      height: 100%;
      background: linear-gradient(180deg, transparent, ${secondaryColor});
      animation: btn-anim2 5s linear infinite;
      animation-delay: 1.25s;
    }

    &:nth-child(3) {
      bottom: 0.1rem;
      right: -100%;
      width: 100%;
      height: 0.3rem;
      background: linear-gradient(270deg, transparent, ${secondaryColor});
      animation: btn-anim3 5s linear infinite;
      animation-delay: 2.5s;
    }

    &:nth-child(4) {
      bottom: -100%;
      left: 0.1rem;
      width: 0.3rem;
      height: 100%;
      background: linear-gradient(360deg, transparent, ${secondaryColor});
      animation: btn-anim4 5s linear infinite;
      animation-delay: 3.7s;
    }
  }

  .user-box {
    position: relative;
    text-align: center;

    input {
      width: 100%;

      font-size: 4rem;
      color: ${fourthColor};
      text-align: center;
      border: none;
      border-bottom: 1px solid ${fourthColor};
      outline: none;
      background: transparent;
    }

    label {
      display: flex;
      color: ${secondaryColor};
      pointer-events: none;
      transition: 0.5s;
      justify-content: center;
      font-size: 3rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    /* input:focus ~ label,
    input:valid ~ label {
      // !donde esta esto
      top: -20px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
    } */
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
