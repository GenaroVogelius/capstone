import styled from "styled-components";

import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";



export const StyledNavigation = styled.header`
  .menu-btn {
    position: absolute;
    z-index: 1;
    right: 1rem;
    top: 1rem;
    height: 20px;
    width: 28px;
    cursor: pointer;
    transition: all 0.8s ease-out;

    &__burguer {
      position: absolute;
      right: 0;
      top: 0.5rem;
      width: 28px;
      height: 3px;
      background-color: ${fourthColor};
      transition: all 0.8s ease-out;

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        width: 28px;
        height: 3px;
        background-color: ${fourthColor};
        transition: all 0.8s ease-out;
      }

      &::after {
        content: "";
        position: absolute;
        top: 8px;
        width: 28px;
        height: 3px;
        background-color: ${fourthColor};
        transition: all 0.8s ease-out;
      }

      &.open {
        transform: rotate(720deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
        }

        &::after {
          width: 28px;
          transform: rotate(-45deg) translate(3px, -7px);
        }
      }
    }
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    opacity: 0.98;
    visibility: hidden;

    &.open {
      visibility: visible;
    }

    .menu-nav {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      background: ${primaryColor};
      list-style-type: none;
      padding-right: 1rem;
      transform: translateY(-100%);
      transition: all 0.8s ease-out;

      &.open {
        transform: translateY(0);
      }

      &__item {
        transform: translateX(100vw);
        transition: all 0.8s ease-out;

        &.open {
          transform: translateX(0);
        }

        &.active > a {
          color: v.$secondary-color;
        }

        #btn-color {
          padding: 4px;
          cursor: pointer;
          color: ${fourthColor};
          font-family: inherit;
          background: ${primaryColor};
          text-align: center;
          border-radius: 5px;
          display: inline-block;
          width: auto;
          font-size: 1rem;
          text-transform: uppercase;
          transition: all 1s ease-out;
          position: relative;
          top: -0.1rem;

          width: 10rem;

          &:hover {
            background-color: ${fourthColor};
            color: ${primaryColor};
          }
        }
      }

      &__link {
        display: inline-block;
        font-size: 1rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: 300;
        transition: all 0.8s ease-out;

        &:hover {
          color: v.$secondary-color;
        }
      }
    }
  }
`;