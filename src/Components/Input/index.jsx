import { Container } from "./style";

export function Input({ inputLabel, id, icon: Icon, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}> {inputLabel}</label>

      <div className="input-container">
        {Icon && <Icon />}
        <input type="text" id={id} {...rest} />
      </div>
    </Container>
  );
}
