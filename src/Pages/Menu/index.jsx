import { Container, Header } from "./styles";
import { FiSearch, FiX } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Footer } from "../../Components/Footer";

export function Menu() {
  return (
    <Container>
      <Header>
        <button type="button">
          <FiX size={"2.4rem"} />
        </button>
        <span>Menu</span>
      </Header>

      <main>
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <div className="options">
          <a href="">Sair</a>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
