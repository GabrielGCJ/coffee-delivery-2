import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
export const Header = () => {
    return (
        <HeaderContainer className="container">
            <div>
                <img src={coffeeLogo} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}