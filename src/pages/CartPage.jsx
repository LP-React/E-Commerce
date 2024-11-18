import { CartInfo } from "../components/CartInfo"
import { Navbar } from "../components/Navbar"
import { CartPageStyled } from "../styled-components/CartPageStyled"

export const CartPage = () => {
    return (
        <CartPageStyled>
            <Navbar />
            <CartInfo />

        </CartPageStyled>
    )
}
