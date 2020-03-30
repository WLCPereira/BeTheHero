import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    appearance: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #FFFFFF;
    font-size: 1.6rem;
  }

  input[type="time"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-outer-spin-button {
    appearance: none !important;
    margin: 0 !important;
  }

  input[type="time"]::-ms-clear { display: none !important; }
  input[type="time"]::-webkit-clear-button,
  input[type="time"]::-webkit-datetime-edit-ampm-field {
    display: none !important;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    appearance: none !important;
    margin: 0 !important;
  }

  input::-ms-clear { display: none; }
  input::-webkit-clear-button,
  input::-webkit-datetime-edit-ampm-field {
    display: none !important;
  }

`;

export default Global;
