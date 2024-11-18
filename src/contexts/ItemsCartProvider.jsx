import { createContext, useEffect, useState } from "react"

export const ItemsCartContext = createContext();

export const ItemsCartProvider = ({ children }) => {

    const [itemsCart, setItemsCart] = useState([
        
    ])

    
    useEffect(() => {
        console.log(itemsCart)
    }, [itemsCart])

    return (
        <ItemsCartContext.Provider value={{ itemsCart, setItemsCart }}>
            {children}
        </ItemsCartContext.Provider>
    )
}
