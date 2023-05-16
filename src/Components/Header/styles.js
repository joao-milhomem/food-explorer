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
  justify-content: space-between;
  gap: 14%;
  padding-inline: 10vw;

  button {
    display: flex;
  }

  img {
    display: block;
    width: 100%;
    max-height: 28px;
  }
`;
