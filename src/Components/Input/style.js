import { styled } from "styled-components";

export const Container = styled.div`
  > label {
    display: block;
    margin-bottom: 8px;
    text-align: start;
  }

  .input-container {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;

    > svg {
      margin-left: 14px;
      font-size: 2.4rem;
    }

    input {
      width: 100%;
      padding: 16px 14px;
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-family: Roboto;
      font-size: 1.6rem;

      &::placeholder {
      }
    }
  }
`;
