import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    background: ${({ theme }) => theme.fondo};
  }

  html, body, #root {
    min-height: 100vh;
    margin:0 10px;
    text-align: center;
    align-items: center;
  }
`;
export default GlobalStyle;