import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background-color: #E5E5E5;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    -webkit-text-decoration-skip: objects;
  }

  img {
    border-style: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
