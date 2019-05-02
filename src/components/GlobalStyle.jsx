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

  input,
  label,
  select,
  button,
  textarea {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    
    /* Browsers have different default form fonts */
    font-size:13px;
    font-family:Arial;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus {
    outline:0;
  }

  /* Box Sizing Reset
  -----------------------------------------------*/

  /* All of our custom controls should be what we expect them to be */
  input,
  textarea {
    -webkit-box-sizing:content-box;
    -moz-box-sizing:content-box;
    box-sizing:content-box;
  }
`;
