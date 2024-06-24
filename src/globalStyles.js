// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: url('/background-texture.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
