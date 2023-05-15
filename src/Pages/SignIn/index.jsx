import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="" />
      <Form>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="exemplo@email.com" />

        <label htmlFor="">Senha</label>
        <input type="text" placeholder="No mínimo 6 caracteres" />

        <button>Entrar</button>

        <a href="">Ainda não tenho conta</a>
      </Form>
    </Container>
  );
}
