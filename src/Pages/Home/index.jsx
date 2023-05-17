import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
export function Home() {
  const isAdmin = true;
  return (
    <Container>
      <Header isAdmin={isAdmin} />
      <main>conteudo</main>
      <Footer />
    </Container>
  );
}
