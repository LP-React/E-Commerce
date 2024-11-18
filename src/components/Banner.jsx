import { useEffect, useLayoutEffect, useState } from "react"
import { BannerContainerStyled, BannerStyled, DivBannerStyled, DivContainerStyled } from "../styled-components/BannerStyled"

export const Banner = () => {

    const bannersImg = [
        'https://oechsle.vteximg.com.br/arquivos/Slider-02-161124-regular-desktop.jpg?v=638671362740730000',
        'https://oechsle.vteximg.com.br/arquivos/Slider-04-161124-regular-desktop.jpg?v=638671362745400000',
        'https://oechsle.vteximg.com.br/arquivos/Slider-07-161124-regular-desktop.jpg?v=638671362751000000',
        'https://oechsle.vteximg.com.br/arquivos/Slider-10-161124-regular-desktop.jpg?v=638671362756000000',
        'https://oechsle.vteximg.com.br/arquivos/Slider-01-161124-regular-desktop.jpg?v=638671362739330000',
        'https://oechsle.vteximg.com.br/arquivos/Slider-03-161124-regular-desktop.jpg?v=638671362742900000'
    ]

    const [banner, setBanner] = useState(0);
    const [fade, setFade] = useState(false);

    const onSelectBanner = (index) => {
        setFade(true);
        setTimeout(() => {
            setBanner(index);
            setFade(false);
        }, 500);
    };

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setBanner((prevBanner) => (prevBanner + 1) % bannersImg.length);
                setFade(false);
            }, 500);
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <BannerContainerStyled >
            <BannerStyled $img={bannersImg[banner]} $fade={fade} />
            <DivContainerStyled>

                {bannersImg.map((_, index) => {
                    return (
                        <DivBannerStyled key={index} onClick={() => onSelectBanner(index)} $active={banner === index} />
                    )
                })}

            </DivContainerStyled>
        </BannerContainerStyled>
    )
}
