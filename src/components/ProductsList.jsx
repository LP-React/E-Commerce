import { useEffect, useState } from "react"
import { ProductsListStyled, TitleStyled } from "../styled-components/ProductListStyled"
import { Product } from "./Product"

export const ProductsList = () => {

    const [products, setProducts] = useState([])

    const fecthProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data = await response.json();
            setProducts(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fecthProducts();
    }, [])


    return (
        <>
            <TitleStyled>Nuevos productos de temporada</TitleStyled>
            <ProductsListStyled>
                {
                    products.map((product) => (<Product key={product.id} productInfo={product}/>))
                }
            </ProductsListStyled>
        </>
    )
}
