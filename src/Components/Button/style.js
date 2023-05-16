import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 12px 0;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:hover {
    filter: brightness(.8);
    cursor: pointer;
  }
`;
