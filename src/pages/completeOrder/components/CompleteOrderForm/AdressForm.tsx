import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export const AdressForm = () => {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="UF" />
      
      
    </AddressFormContainer>
  );
};
