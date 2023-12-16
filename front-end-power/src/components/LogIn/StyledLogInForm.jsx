import styled from "styled-components";

import {
  secondaryColor,
  primaryColor,
  thirdColor,
  fourthColor,
} from "../../StyleVariables/StyleVariables";

export const computerSize = 1200;

export const StyledLogInForm = styled.div`
  a,
  a:active,
  a:focus,
  a:hover {
    text-decoration: none;
    outline: 0;
  }
  a,
  a:active,
  a:focus {
    color: #333;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    -ms-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  input,
  textarea {
    padding: 15px 25px;
    width: 100%;
    text-transform: capitalize;
  }
  input,
  select,
  textarea {
    border: none;
    vertical-align: baseline;
    font-size: 100%;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .signup-area {
    position: relative;
    padding: 60px;
    box-shadow: 0 0 27px 3px rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
    z-index: 2;
    background-color: #fff;
  }
  @media only screen and (max-width: 991px) {
    .signup-area {
      padding: 30px;
    }
  }
  .signup-area::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background-image: linear-gradient(144deg, #585656, #161616 70%, #969696);
    z-index: -1;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  @media only screen and (max-width: 991px) {
    .signup-area::after {
      display: none;
    }
  }
  .signup-area .title {
    margin-bottom: 25px;
    font-size: 2.4em;
  }
  .signup-area p {
    margin-bottom: 40px;
  }
  .signup-area .signup-element {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;
  }

  .signup-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -5;
  }
  @media only screen and (max-width: 1199px) {
  }
  .signup-left-area {
    width: 90%;
  }
  @media only screen and (max-width: 991px) {
    .signup-left-area {
      width: 100%;
    }
  }
  .signup-form .formmm-group {
    position: relative;
  }
  .signup-form input {
    box-shadow: 0 0 27px 3px rgba(0, 0, 0, 0.1);
    color: #777;
  }
  .signup-form input::placeholder {
    color: #777;
  }
  .signup-right-area {
    margin-left: 60px;
  }
  @media only screen and (max-width: 991px) {
  }
  .signup-right-area .title {
    color: #fff;
  }
  .signup-right-area p {
    color: #fff;
  }
  .signup-right-area-two {
    margin-left: 0;
  }
  .control a {
    color: ${primaryColor};
  }
  .signup-form .form-group input[type="submit"] {
    /* background-color: var(--blue);
    background-image: linear-gradient(
      90deg,
      var(--blue) 0%,
      var(--lightblue) 74%
    ); */
    border-radius: 20px;
    background-image: linear-gradient(179deg, ${primaryColor}, ${thirdColor});
    border: 2px solid ${thirdColor};
    color: white;
    cursor: pointer;
    font-size: 0.8rem;

    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:hover {
      transition: all 0.3s ease-in-out 0s;
      -moz-transition: all 0.3s ease-in-out 0s;
      -ms-transition: all 0.3s ease-in-out 0s;
      -o-transition: all 0.3s ease-in-out 0s;
      -webkit-transition: all 0.3s ease-in-out 0s;
      cursor: pointer;
      clear: both;
      display: inline-block;
      border: 2px solid ${secondaryColor};
    }
  }
  .show-pass {
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    width: 90px;
    text-align: center;
    line-height: 54px;
    font-size: calc(1.325rem + 0.9vw);
    text-transform: capitalize;
    color: #777;
  }
  .control-two {
    color: ${primaryColor};
  }
  .sign-up-option {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    margin-bottom: -5px;
    margin-bottom: 45px;
    margin-top: 20px;
  }
  .sign-up-option li {
    padding: 5px;
    display: inline;
  }

  .sign-up-option li a i {
    margin-right: 5px;
  }
  .sign-up-option li a.google {
    background: ${primaryColor};
  }
  .sign-up-option li a.facebook {
    background: #3b5998;
  }
`;
