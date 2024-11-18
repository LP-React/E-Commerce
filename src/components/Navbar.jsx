import { CartIconStyled, CartLengthStyled, CartLinkStyled, CartStyled, InputStyled, LoginIconStyled, LoginSpanStyled, LoginStyled, Logostyled, NavBarStyled } from "../styled-components/NavBarStyled"

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ItemsCartContext } from "../contexts/ItemsCartProvider";
import { Link } from "react-router-dom";



export const Navbar = () => {

    const { itemsCart } = useContext(ItemsCartContext);

    return (
        <NavBarStyled>

            <Link to='/'>
                <Logostyled />
            </Link>

            <InputStyled placeholder="Buscar en toda la tienda..." />

            <LoginStyled>
                <LoginIconStyled icon={faUserCircle} />
                <LoginSpanStyled>Iniciar Sesión</LoginSpanStyled>
            </LoginStyled>

            <CartLinkStyled to={'/cart'}>
                <CartStyled>
                    <CartLengthStyled>{itemsCart.length}</CartLengthStyled>
                    <CartIconStyled icon={faCartShopping} />
                </CartStyled>
            </CartLinkStyled>

        </NavBarStyled>
    )
}
