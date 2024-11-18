import { useContext, useEffect, useState } from "react";
import { ProductStyled, TitleStyled, ImgStyled, PriceStyled } from "../styled-components/ProductStyled"
import { ItemsCartContext } from "../contexts/ItemsCartProvider";

export const Product = ({ productInfo }) => {

    const { setItemsCart } = useContext(ItemsCartContext)


    const { category, description, image, price, rating, title } = productInfo;

    const addItemCart = () => {
        setItemsCart((prev) => (
            [
                ...prev,
                productInfo
            ]
        ))
    }

    return (
        <ProductStyled onClick={() => addItemCart()}>
            <ImgStyled src={image} />
            <TitleStyled>{title}</TitleStyled>
            <PriceStyled>$ {price}</PriceStyled>
        </ProductStyled>
    )
}
