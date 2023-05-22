import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;

  display: grid;
  text-align: center;
  gap: 12px;

  min-width: 210px;
  width: 100%;
  max-width: 304px;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
/* 
  > * svg {
    background-color: blue;
  } */

  > svg {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  > img {
    justify-self: center;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    button {
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    span {
      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;
    }
  }

  > button {
    margin-top: 4px;
    padding: 4px;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;
