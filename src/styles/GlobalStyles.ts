import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

  :root {
    --blue: #5429CC;
    --blue-ligth: #6933ff;
    --green: #33CC95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --titles: #363F5F;
    --texts: #969CB3;
    --background: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }




`;