// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1, p {
    margin-bottom: ${(props) => props.theme.spacing.medium};
  }
`;

export default GlobalStyles;
