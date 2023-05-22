import { Container } from "./styles";
import { Button } from "../../Components/Button";
import { FiArrowRight, FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import salad from "../../assets/dish-salad-sm.png";
export function Card() {
  return (
    <Container>
      <FiHeart size={24} />

      <img src={salad} alt="" />

      <p>
        Salada Ravanello
        <FiArrowRight />
      </p>

      <span>R$ 49,97</span>

      <div className="amount">
        <button type="button">
          <FiMinus size={24} />
        </button>

        <span>01</span>

        <button type="button">
          <FiPlus size={24} />
        </button>
      </div>

      <Button>incluir</Button>
    </Container>
  );
}
