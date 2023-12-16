import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  thirdColor,
  appearAnimation,
} from "../../StyleVariables/StyleVariables";

export const StyledPrecios = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700italic,700,900italic,900);
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);

  #generic_price_table .generic_content {
    background-color: #fff;
    box-shadow: 7px 5px 17px -1px ${primaryColor};
  }

  #generic_price_table .generic_content .generic_head_price {
    background-color: #f6f6f6;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head_bg {
    border-color: #e4e4e4 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e4e4e4;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head
    span {
    color: #525252;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .sign {
    color: #414141;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .currency {
    color: #414141;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .cent {
    color: #414141;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .month {
    color: #414141;
  }

  #generic_price_table .generic_content .generic_feature_list ul li {
    color: #a7a7a7;
  }

  #generic_price_table .generic_content .generic_feature_list ul li span {
    color: #414141;
  }
  #generic_price_table .generic_content .generic_feature_list ul li:hover {
    background-color: #e4e4e4;
    border-left: 5px solid ${secondaryColor};
  }

  #generic_price_table
    .generic_content.active
    .generic_head_price
    .generic_head_content
    .head_bg,
  #generic_price_table
    .generic_content:hover
    .generic_head_price
    .generic_head_content
    .head_bg {
    border-color: ${secondaryColor} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)
      ${secondaryColor};
    color: #fff;
  }

  #generic_price_table
    .generic_content:hover
    .generic_head_price
    .generic_head_content
    .head
    span,
  #generic_price_table
    .generic_content.active
    .generic_head_price
    .generic_head_content
    .head
    span {
    color: #fff;
  }

  #generic_price_table .generic_content:hover .generic_price_btn a,
  #generic_price_table .generic_content.active .generic_price_btn a {
    background-color: ${secondaryColor};
    color: #fff;
  }
  #generic_price_table {
    font-family: "Raleway", sans-serif;
  }
  .row .table {
    padding: 28px 0;
  }

  /*PRICE BODY CODE START*/

  #generic_price_table .generic_content {
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content {
    margin: 0 0 50px 0;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head_bg {
    border-style: solid;
    border-width: 90px 1411px 23px 399px;
    position: absolute;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head {
    padding-top: 40px;
    position: relative;
    z-index: 1;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head
    span {
    font-family: "Raleway", sans-serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  #generic_price_table .generic_content .generic_head_price .generic_price_tag {
    padding: 0 0 2rem;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price {
    display: block;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .sign {
    display: inline-block;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    font-weight: 400;
    vertical-align: middle;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .currency {
    font-family: "Lato", sans-serif;
    font-size: 60px;
    font-weight: 300;
    letter-spacing: -2px;
    line-height: 60px;
    padding: 0;
    vertical-align: middle;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .price
    .cent {
    display: inline-block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 400;
    vertical-align: bottom;
  }

  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_price_tag
    .month {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 3px;
    vertical-align: bottom;
  }

  #generic_price_table .generic_content .generic_feature_list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #generic_price_table .generic_content .generic_feature_list ul li {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 15px 0;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table .generic_content .generic_feature_list ul li:hover {
    transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table .generic_content .generic_feature_list ul li .fa {
    padding: 0 10px;
  }
  #generic_price_table .generic_content .generic_price_btn {
    margin: 20px 0 32px;
  }

  #generic_price_table .generic_content .generic_price_btn a {
    border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    -webkit-border-radius: 50px;
    display: inline-block;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    outline: medium none;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: uppercase;
  }

  #generic_price_table .generic_content,
  #generic_price_table .generic_content:hover,
  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head_bg,
  #generic_price_table
    .generic_content:hover
    .generic_head_price
    .generic_head_content
    .head_bg,
  #generic_price_table
    .generic_content
    .generic_head_price
    .generic_head_content
    .head
    h2,
  #generic_price_table
    .generic_content:hover
    .generic_head_price
    .generic_head_content
    .head
    h2,
  #generic_price_table .generic_content .price,
  #generic_price_table .generic_content:hover .price,
  #generic_price_table .generic_content .generic_price_btn a,
  #generic_price_table .generic_content:hover .generic_price_btn a {
    transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }
  @media (max-width: 320px) {
  }

  /* @media (max-width: 767px) {
    #generic_price_table .generic_content {
      margin-bottom: 75px;
    } */
  /* } */
  @media (min-width: 768px) and (max-width: 991px) {
    #generic_price_table .col-md-3 {
      float: left;
      width: 50%;
    }

    #generic_price_table .col-md-4 {
      float: left;
      width: 50%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) {
  }
  #generic_price_table_home {
    font-family: "Raleway", sans-serif;
  }

  .text-center h1,
  .text-center h1 a {
    color: #7885cb;
    font-size: 30px;
    font-weight: 300;
    text-decoration: none;
  }
  .demo-pic {
    margin: 0 auto;
  }
  .demo-pic:hover {
    opacity: 0.7;
  }

  #generic_price_table_home ul {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: table;
  }
  #generic_price_table_home li {
    float: left;
  }
  #generic_price_table_home li + li {
    margin-left: 10px;
    padding-bottom: 10px;
  }
  #generic_price_table_home li a {
    display: block;
    width: 50px;
    height: 50px;
    font-size: 0px;
  }
  #generic_price_table_home .blue {
    background: #3498db;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .emerald {
    background: ${secondaryColor};
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .grey {
    background: ${thirdColor};
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .midnight {
    background: #34495e;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .orange {
    background: #e67e22;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .purple {
    background: #9b59b6;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .red {
    background: #e74c3c;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .turquoise {
    background: ${secondaryColor};
    transition: all 0.3s ease-in-out 0s;
  }

  #generic_price_table_home .blue:hover,
  #generic_price_table_home .emerald:hover,
  #generic_price_table_home .grey:hover,
  #generic_price_table_home .midnight:hover,
  #generic_price_table_home .orange:hover,
  #generic_price_table_home .purple:hover,
  #generic_price_table_home .red:hover,
  #generic_price_table_home .turquoise:hover {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    transition: all 0.3s ease-in-out 0s;
  }
  #generic_price_table_home .divider {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    padding: 20px;
  }
  #generic_price_table_home .divider span {
    width: 100%;

    display: table;
    height: 2px;
    background: #ddd;
    margin: 50px auto;
    line-height: 2px;
  }
  #generic_price_table_home .itemname {
    text-align: center;
    font-size: 50px;
    padding: 50px 0 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 40px;
    text-decoration: none;
    font-weight: 300;
  }
  #generic_price_table_home .itemnametext {
    text-align: center;
    font-size: 20px;
    padding-top: 5px;
    text-transform: uppercase;
    display: inline-block;
  }

  .demo-button {
    background-color: #333333;
    color: #ffffff;
    display: table;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    outline-color: -moz-use-text-color;
    outline-style: none;
    outline-width: medium;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }

  .price {
    padding: 1rem;
  }

  .special-offer-badge {
    /* ! ANIMACION */

    ${appearAnimation}

    color: #fff;
    position: relative;
    top: 14rem;
    z-index: 1;
    text-align: center;
  }

  .special-offer-badge:before {
    content: "";
  }

  .special-offer-badge:after {
    content: "";
  }
  .special-offer-badge:before,
  .special-offer-badge:after {
    position: absolute;
    top: 0;
    left: 0rem;
    height: 5rem;
    width: 5rem;
    background: goldenrod;
    font-size: 100%;
  }
  .special-offer-badge:before {
    -webkit-transform: rotate(296deg);
  }
  .special-offer-badge:after {
    -webkit-transform: rotate(343deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
  }

  .special-offer-badge > span {
    color: #fff;
    z-index: 999;
    top: 4px;
    width: fit-content;
    max-width: 5.4rem;
    line-height: initial;
    position: absolute;
    left: -0.4rem;
    font-family: "Lato", sans-serif;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    transform: rotate(-16deg);
  }

  @media (prefers-reduced-motion) {
    .react-loading-skeleton {
      --pseudo-element-display: block;
      max-width: 60%;
      height: 7vh;
      margin: 1rem;
    }
  }

  .animationOn {
    ${appearAnimation}
  }
`;
