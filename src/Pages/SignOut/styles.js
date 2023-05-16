import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  main {
    min-width: 288px;
    width: 90%;
    max-width: 540px;

    margin-top: -6vh;

    text-align: center;

    img {
      margin-bottom: 73px;
      max-width: 27.9rem;
    }

    @media (min-width: 769px) {
      max-width: inherit;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 6vw;

      > img {
        margin-bottom: 0;
      }

      > form {
        max-width: 476px;
        flex-grow: 1;
        padding: 64px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        h1 {
          display: inherit;
          justify-content: center;

          font-family: Poppins;
          font-size: 32px;
          font-weight: 500;
          line-height: 45px;
        }
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    display: none;
  }

  > a {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    margin: auto;
  }
`;
