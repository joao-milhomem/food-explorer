import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 114px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Nav = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 12%;
  padding-inline: 10vw;

  * button {
    display: flex;
  }

  li:nth-child(2) > a {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 100%;
      display: block;
      max-height: 30px;
    }

    span {
      font-family: Roboto;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  //notifications
  li:last-child {
    button {
      position: relative;
    }
    span {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 20px;

      border-radius: 50px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
