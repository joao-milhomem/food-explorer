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
  margin: auto;
`;

export const Marketing = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  margin: 14vw 6vw 18vw 8vw;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 5px;

  > img {
    position: absolute;
    bottom: 0;
    left: -7.5vw;
    left: clamp(-7.5vw, 9vw, -35px);

    width: clamp(191px, 55vw, 656px);
    max-height: clamp(149px, 28vw, 380px);
    padding-right: clamp(4.6rem, 11vw, 10rem);
  }

  .text-container {
    width: 100%;
    padding: 5vw 2vw 5vw 36vw;

    h1 {
      margin-bottom: clamp(3px, 0.8vw, 8px);

      font-family: "Poppins";
      font-size: clamp(1.4rem, 4vw, 4rem);
      font-weight: 600;
      line-height: clamp(2.5rem, 7.8vw, 5.6rem);
    }

    p {
      font-family: Poppins;
      font-size: clamp(1.1rem, 2vw, 1.6rem);
      font-weight: 400;
      line-height: clamp(1.4rem, 1.5rem, 1.6rem);

      .max375px {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    > img {
      max-height: clamp(149px, 29vw, 416px);
    }

    > .text-container {
      padding: 7vw 2vw 6vw 37vw;

      p{
        font-size: clamp(1.6rem, 2.1vw, 2rem);
      }
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding-left: clamp(2.4rem, 7%, 12.3rem);

  margin-bottom: 7.5vw;

  > h3 {
    margin-bottom: 7.5vw;

    font-family: Poppins;
    font-size: clamp(1.8rem, 4vw, 3.2rem);
    font-weight: 500;
    line-height: clamp(2.5rem, 4.5vw, 4.4rem);
  }

  .cards {
    display: flex;
    overflow-x: auto;
    gap: 16px;
  }
`;
