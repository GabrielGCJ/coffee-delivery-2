// import { useCart } from "../../../../hooks/useCart";
import { TitleText } from "../../../../components/Typography";
// import { CoffeeCartCard } from "../CoffeeCartCard";;
// import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  // const { cartItems } = useCart();;

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>Item</p>
        {/* {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))} */}

        {/* <ConfirmationSection /> */}
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
