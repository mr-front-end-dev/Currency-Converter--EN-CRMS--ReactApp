import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.color.lightgrey};
    cursor: context-menu;
  }
`;