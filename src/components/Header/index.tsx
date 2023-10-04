import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <HeaderContainer className="container">
            <div>

                <NavLink to="/">
                    <img src={coffeeLogo} alt="" />
                </NavLink>                
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}