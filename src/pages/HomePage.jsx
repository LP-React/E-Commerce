import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { ProductsList } from "../components/ProductsList"
import { HomePageStyled } from "../styled-components/HomePageStyled"


export const HomePage = () => {


    return (
        <HomePageStyled>
            <Navbar />
            <Banner />
            <ProductsList />
        </HomePageStyled>
    )
}
