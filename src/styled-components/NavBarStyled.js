import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {colorBlack, colorRed, colorWhite} from './../themes/colors'
import { Link } from "react-router-dom";

export const NavBarStyled = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${colorWhite};
    padding: 8px 0;
    border-bottom: 2px solid ${colorBlack};
    font-family: 'Inter';
    position: fixed;
    z-index: 100;
    top: 0;
`
export const Logostyled = styled.div`
    width: 80px;
    height: 25px;
    background-color: ${colorBlack};
    border-radius: 20px;
`
export const InputStyled = styled.input`
    all: unset;
    font-weight: 300;
    width: 60%;
    background-color: ${colorWhite};
    border-radius: 5px;
    transition: 0.1s;
    outline: 1px solid ${colorBlack};
    padding: 6px 12px;
    font-size: 1rem;
    &:hover{
        outline: 1px solid ${colorRed};
    }
`

export const LoginStyled = styled.div`
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: center;
`

export const LoginIconStyled = styled(FontAwesomeIcon)`
    height: 20px;
    width: 20px;
    margin: 0 5px;
`

export const LoginSpanStyled = styled.span`

`

export const CartStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid ${colorBlack};
    padding: 0 10px;
`
export const CartLengthStyled = styled.span`
    margin: 0 5px;
    font-size: 1.2rem;
`

export const CartIconStyled = styled(FontAwesomeIcon)`
    height: 20px;
    width: 20px;
`

export const CartLinkStyled = styled(Link)`
    text-decoration: none;
    color: ${colorBlack};
    transition: 0.2s;

    &&:hover{
        color: ${colorRed};
    }
`
