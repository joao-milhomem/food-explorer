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

  > * {
    min-width: 0;
  }

  main {
    grid-area: main;
  }
`;

export const Content = styled.div`
  height: 100%;
`;

export const Marketing = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  margin: 14vw 4vw 20vw 9.5vw;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 5px;

  > img {
    position: absolute;
    bottom: 0;
    left: -26px;

    max-width: 191px;
    padding-right: 32px;
  }

  .text-container {
    padding: 7vw 0 5.5vw 39vw;
    
    width: 100%;

    h1 {
      font-family: "Poppins";
      font-size: clamp(1.4rem, 4.4vw, 4rem);
      font-weight: 600;
      line-height:max(2.5rem,3.5vw);
      margin-bottom: 3px;
    }

    p {
      font-size: 1rem;
      font-size: clamp(1rem, 3.1vw, 1.6rem);
      font-weight: 400;
      line-height: 1.7rem;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding-left: 24px;
  margin-bottom: 24px;

  > h3 {
    margin-bottom: 24px;

    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;
  }

  .cards {
    display: flex;
    overflow-x: auto;
    gap: 16px;
  }
`;
