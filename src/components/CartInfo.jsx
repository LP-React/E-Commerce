import { useContext, useEffect, useState } from "react"
import { CartInfoStyled, IconTableStyled, ImageTableStyled, TdCenterStyled, TdStartStyled, ThStyled } from "../styled-components/CartInfoStyled"
import { ItemsCartContext } from "../contexts/ItemsCartProvider"
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export const CartInfo = () => {

    const { itemsCart, setItemsCart } = useContext(ItemsCartContext);
    const [totalCart, setTotalCart] = useState(0)


    const onRemoveItem = (index) => {

        const newItemsCart = itemsCart;
        newItemsCart.splice(index, 1)

        setItemsCart([
            ...newItemsCart
        ])
    }

    const quantity = 1;

    useEffect(() => {
        let total = 0;
        itemsCart.map(item => { total = total + item.price });
        setTotalCart(total);
    }, [itemsCart]);

    return (
        <CartInfoStyled>
            <thead>
                <tr>
                    <ThStyled> - </ThStyled>
                    <ThStyled>Producto</ThStyled>
                    <ThStyled>Precio</ThStyled>
                    <ThStyled>Cantidad</ThStyled>
                    <ThStyled>Total</ThStyled>
                    <ThStyled> - </ThStyled>
                </tr>
            </thead>
            <tbody>
                {itemsCart.map((item, index) => (
                    <tr key={index}>
                        <TdCenterStyled><ImageTableStyled src={item.image} /></TdCenterStyled>
                        <TdStartStyled>{item.title}</TdStartStyled>
                        <TdCenterStyled>{item.price}</TdCenterStyled>
                        <TdCenterStyled> {quantity} </TdCenterStyled>
                        <TdCenterStyled> {quantity * item.price} </TdCenterStyled>
                        <TdCenterStyled><IconTableStyled icon={faXmark} onClick={() => onRemoveItem(index)} /></TdCenterStyled>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <TdCenterStyled>Total</TdCenterStyled>
                    <TdCenterStyled style={{ padding: '15px 0' }}>{totalCart.toFixed(2)}</TdCenterStyled>
                    <td></td>
                </tr>
            </tfoot>
        </CartInfoStyled>
    )
}
