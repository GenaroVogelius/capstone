import styled from "styled-components";
import {
  fourthColor,
  primaryColor,
  secondaryColor,
  thirdColor,
} from "../../StyleVariables/StyleVariables";

export const StyledRutina = styled.div`
  .title {
    margin: 0;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;
    background: #151414;
    border-bottom: 3px solid #ff5e14;
    font-weight: 100;
    /* background: radial-gradient(#151414, #4e4e4e); */
    font-weight: 500;
  }

  .info {
    margin: 0;
    padding: 16px 40px;

    background: radial-gradient(${fourthColor}, #ccc);
    font-weight: 500;
    line-height: 28px;
  }

  .card p.small {
    font-size: 14px;
  }

  .card {
    display: flex;
    letter-spacing: 0.1em;
    flex-direction: column;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    z-index: 0;
    overflow: hidden;
  }

  .card:before {
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  .card:hover:before {
    transform: scale(21);
  }

  .card:hover p {
    transition: all 0.3s ease-out;
    /* color: rgba(214, 17, 17, 0.8); */
  }

  .card:hover h3 {
    transition: all 0.3s ease-out;
    color: #fff;
  }

  .card2 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    border: 1px solid #f2f8f9;
  }

  .card2:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #ccc;
    background-color: white;
  }

  .card2:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  .card2:hover:before {
    transform: scale(2.15);
  }

  .card3 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #f2f8f9;
  }

  .card3:hover {
    border: 1px solid #00838d;
    box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
    z-index: 500;
  }

  .card3:hover p {
    color: #00838d;
  }

  .card4 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #fff;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #ccc;
  }

  .card4 .go-arrow {
    transform: skew(-6deg);
    margin-left: -2px;
    margin-top: 9px;
    opacity: 0;
  }

  .card4:hover {
    border: 1px solid #cd3d73;
  }

  .card4 h3 {
    margin-top: 8px;
  }

  .card4:hover .go-corner-right {
    margin-right: -12px;
  }

  .card4:hover .go-arrow {
    opacity: 1;
  }
  @keyframes accordionOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.9) rotateX(-60deg);
    }
  }

  .go-corner-right,
  .go-corner-left {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.8rem;
    height: 22rem;

    top: 0rem;
    right: 0;
    cursor: pointer;

    background-color: #b86106;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff8100;
    }
  }

  .go-corner-right {
    right: 0;
    border-radius: 20px 4px 4px 20px;
  }

  .go-corner-left {
    left: 0;
    border-radius: 4px 20px 20px 4px;
  }

  /* .btn {
    align-items: center;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    color: ${fourthColor};
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  } */

  .btn-exercise:active,
  :hover {
    outline: 0;
  }

  .btn-exercise span {
    transition: 300ms;
  }

  .btn-exercise:hover span {
    background: none;
  }

  .btn-exercise:active {
    transform: scale(0.9);
  }

  .btn-exercise {
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.3s;

    border: 2px solid ${secondaryColor};
    background: linear-gradient(180deg, ${primaryColor} 6%, ${thirdColor} 60%);
    color: ${fourthColor};

    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), ${secondaryColor});
  }

  .btn-exercise:active {
    scale: 0.6;
  }

  .btn-exercise:hover {
    /* background: linear-gradient(180deg, #ffffff 6%, #4e4e4e 75%); */
    color: ${secondaryColor};
    font-weight: 600;
  }
`;
