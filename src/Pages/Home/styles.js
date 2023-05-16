import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
    "header"
    "main"
    "footer";

  main {
    grid-area: main;
  }
`;
