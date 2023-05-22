import { Container, Content, Marketing, Section } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import cropArt from "../../assets/crop_art.png";
import cropArtBg from "../../assets/crop_art_bg.png";
import { Card } from "../../Components/Card";

export function Home() {
  const isAdmin = false;

  return (
    <Container>
      <Header isAdmin={isAdmin} />

      <main>
        <Content>
          <Marketing>
            <img src={cropArt} alt="" />
            <div className="text-container">
              <h1>Sabores iniguláveis</h1>

              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Marketing>

          <Section>
            <h3>Refeições</h3>

            <div className="cards">
              <Card />
              <Card />
            </div>
          </Section>

          <Section>
            <h3>Refeições</h3>

            <div className="cards">
              <Card />
              <Card />
            </div>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
