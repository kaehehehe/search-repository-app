import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  html {
    font-size: 62.5%;
    background-color: #22272D;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
