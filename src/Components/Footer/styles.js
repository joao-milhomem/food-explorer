import { styled } from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding-inline: 28px;

  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > span {
    text-align: center;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
  }
`;
