import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colorBlack, colorRed, colorWhite } from './../themes/colors'

export const CartInfoStyled = styled.table`
    margin: 70px auto;
    width: 75%;
    font-family: 'Inter';
    border-collapse: collapse;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.4);
`

export const IconTableStyled = styled(FontAwesomeIcon)`
    width: 15px;
    height: 15px;
    padding: 8px;
    cursor: pointer;
    clip-path: circle(50%);
    color: ${colorWhite};
    background-color: ${colorRed};
`

export const ImageTableStyled = styled.img`
    width: 40px;
    height: 60px;
    object-fit: contain;
    padding: 10px;
`


export const ThStyled = styled.th`
    border: 1px solid ${colorBlack};
    padding: 15px 20px;
`

export const TdStyled = styled.td`
    font-weight: 700; 
    border-bottom: 1px solid ${colorBlack};

`

export const TdCenterStyled = styled(TdStyled)`
    text-align: center;
`

export const TdStartStyled  = styled(TdStyled)`
    text-align: start;
`