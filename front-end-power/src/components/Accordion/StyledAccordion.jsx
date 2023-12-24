import styled from "styled-components";
import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";

export const StyledAccordion = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Lato:400,700);

  .heading-primary {
    font-size: 2em;
    padding: 2em;
    text-align: center;
  }

  .accordion dd,
  .accordion__panel {
    background-color: ${fourthColor};
    font-size: 1em;
    line-height: 1.5em;
  }
  .accordion p {
    padding: 1em 2em 1em 2em;
  }

  .accordion {
    position: relative;
    background-color: ${fourthColor};
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 0 2em 0;
  }
  .accordionTitle,
  .accordion__Heading {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    display: grid;
    grid-template-rows: auto;
    align-items: baseline;
    justify-items: center;
    background-image: linear-gradient(
      144deg,
      ${thirdColor},
      ${primaryColor} 70%,
      #969696
    );
    text-align: center;
    font-weight: 700;
    padding: 2em;
    text-decoration: none;
    color: ${fourthColor};
    transition: background-color 0.5s ease-in-out;
    border-bottom: 1px solid darken(#38cc70, 5%);
    &:hover {
      /* margin-top: 0.5rem; */
      background-image: none;
      background: ${secondaryColor};
      box-shadow: 0 0 9px 1px ${primaryColor};
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
    &:before {
      content: "+";

      font-size: 1.5em;
      line-height: 0.5em;
      float: left;
      transition: transform 0.3s ease-in-out;
    }
  }
  .accordionTitleActive,
  .accordionTitle.is-expanded {
    background: ${secondaryColor};
    box-shadow: 0 0 9px 1px ${primaryColor};
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;

    &:before {
      font-size: 1.7em;
      transform: rotate(-225deg);
      padding-bottom: 0.4rem;
    }
  }
  .accordionItem {
    height: auto;
    overflow: hidden;

    max-height: 50em;
    transition: max-height 1s;

    @media screen and (min-width: 48em) {
      transition: max-height 0.5s;
    }
  }

  .accordionItem.is-collapsed {
    max-height: 0;
  }
  .no-js .accordionItem.is-collapsed {
    max-height: auto;
  }
  .animateIn {
    animation: accordionIn 0.45s normal ease-in-out both 1;
  }
  .animateOut {
    animation: accordionOut 0.45s alternate ease-in-out both 1;
  }
  @keyframes accordionIn {
    0% {
      opacity: 0;
      transform: scale(0.9) rotateX(-60deg);
      transform-origin: 50% 0;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: ${secondaryColor};
    padding-left: 0;
    margin: 0;
    border-radius: 14px;
    border: 1px solid ${secondaryColor};
    cursor: pointer;
    li {
      list-style: none;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      font-size: 16px;
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
  }
`;
