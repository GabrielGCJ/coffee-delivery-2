// import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";
// import { CartItem } from "../../../../contexts/CartContext";
// import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { coffees } from "../../../../data/coffees";
import { QuantityInput } from "../../../../components/QuantityInput";

// interface CoffeeCartCardProps {
//   coffee: CartItem;
// }

export function CoffeeCartCard({ coffee }: any) {
  // const { changeCartItemQuantity, removeCartItem } = useCart();

  // function handleIncrease() {
  //   changeCartItemQuantity(coffee.id, "increase");
  // }

  // function handleDecrease() {
  //   changeCartItemQuantity(coffee.id, "decrease");
  // }

  // function handleRemove() {
  //   removeCartItem(coffee.id);
  // }

  // const coffeeTotal = coffee.price * coffee.quantity;

  // const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffees[1].photo}`} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
             <QuantityInput
              // onIncrease={handleIncrease}
              // onDecrease={handleDecrease}
              quantity={1}
              size="small"
            />
            <RemoveButton
              type="button" 
              // onClick={handleRemove}
              >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      {/* <p>R$ {formattedPrice}</p> */}
    </CoffeeCartCardContainer>
  );
}
