import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size:1.6rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color:${({ theme }) => theme.COLORS.LIGHT_300};
  }

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  ul {
    list-style-type: none;
  }

  
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  button,textarea, input {
    border: none;
    outline: none;
    background: none;
  }

  footer {
    font-family: 'DM Sans', sans-serif;
  }
`;
