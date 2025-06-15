import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
     font-family: 'Montserrat', sans-serif;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;

    p {
      margin: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p, 
  span {
    font-family: 'Zen Dots', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
