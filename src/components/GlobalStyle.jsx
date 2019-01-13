import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
  }

  img {
    border-style: none;
  }
`;
