import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="" />

      <Form>
        <Input
          type="text"
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

        <a href="">Ainda não tenho conta</a>
      </Form>
    </Container>
  );
}
