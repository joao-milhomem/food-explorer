import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  main {
    grid-area: content;
    padding: 36px 28px 14px;

    .options {
      margin-top: 36px;
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      > a {
        font-size: 2.4rem;
        font-weight: 300;
        line-height: 3.4rem;
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 114px;

  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 28px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > button {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    font-family: Roboto;
    font-size: 2.1rem;
    font-weight: 400;
  }
`;
