import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body{
    height: 100vh;
  }

  body{
    background: #15202b;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

`;