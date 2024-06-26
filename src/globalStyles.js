// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #E88D67;
    --secondary-color: #F3F7EC;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--secondary-color);
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
