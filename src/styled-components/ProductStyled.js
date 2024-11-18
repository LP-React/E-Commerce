import styled from "styled-components";
import { colorBlack } from "../themes/colors";

export const ProductStyled = styled.div`
    width: 200px;
    margin: 10px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba( 0, 0, 0, 0.3);
    transition: 0.2s;
    padding: 10px;

    font-family: 'Inter';
    cursor: pointer;

    &&:hover{
        transform: scale(1.02);
        box-shadow: 0px 0px 15px rgba( 0, 0, 0, 0.6);
    }

`

export const ImgStyled = styled.img`
    object-fit: contain;
    width: 100%;
    height: 70%;
`

export const TitleStyled = styled.h3`
    width: 100%;
    text-align: center;
    font-weight: 300;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-top: 2px solid ${colorBlack};
    padding-top: 10px;
`;


export const PriceStyled = styled.div`
    text-align: center;
`