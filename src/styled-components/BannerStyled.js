import styled from "styled-components";

import { colorBlack, colorRed, colorWhite } from './../themes/colors'

export const BannerContainerStyled = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 48px;
    position: relative;
`;

export const BannerStyled = styled.div`
    width: 100%;
    height: 400px;
    margin-top: 48px;
    position: relative;
    background-image: ${(props) => (props.$img ? `url(${props.$img})` : `none`)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    opacity: ${(props) => (props.$fade ? 0 : 1)};
    transition: opacity 0.2s ease-in-out;
`

export const DivContainerStyled = styled.div`
    display: flex;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const DivBannerStyled = styled.div`
    background-color: ${props => props.$active ? colorRed : colorWhite};
    width: 10px;
    height: 10px;
    clip-path: circle(50%);
    margin: 2px;
    cursor: pointer;
    transition: 0.15s;

`