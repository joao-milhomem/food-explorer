import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignOut() {
  return (
    <Container>
      <main>
        <img src={logo} alt="" />

        <Form>
          <h1>Crie sua conta</h1>

          <Input
            type="text"
            inputLabel={"Seu nome"}
            placeholder="Maria da silva"
            id={"name"}
          />

          <Input
            type="email"
            inputLabel={"Email"}
            placeholder="exemplo@exemplo.com.br"
            id={"email"}
          />

          <Input
            type="password"
            inputLabel={"Senha"}
            placeholder="No minimo 6 caracteres"
            id={"password"}
          />

          <Button>Entrar</Button>

          <a href="">Já tenho uma conta</a>
        </Form>
      </main>
    </Container>
  );
}
