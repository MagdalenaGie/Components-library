import React from 'react'
import styled from 'styled-components';
import {ButtonProps} from "./Button.types"

const StyledButton = styled.button<ButtonProps>`
    line-height: 1;
    font-size: 15px;
    font-family: Montserrat;
    cursor: pointer;
    display: inline-block;
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
    border: none;
    color: ${props => 
        props.styleType === "raspberry" ? "#f72267" 
        : props.styleType === "orange" ? "#f78622"
        : props.styleType === "yellow" ? "#f7c222"
        : "#03e9f4"};
    background: transparent;
    padding: 9px 30px 11px;
    &:hover {
        box-shadow: 0px 0px 10px 0px rgb(172, 171, 169);
    }
    &:active {
        box-shadow: 0px 0px 20px 0px rgb(172, 171, 169);
        text-shadow: 0px 0px 15px rgb(172, 171, 169);
    }
`;

export const Button: React.FC<ButtonProps> = ({size, styleType, disabled, label, onClick, ...props}) => {
    return (
        <StyledButton type="button" onClick={onClick} styleType={styleType} disabled={disabled} size={size} {...props}>
            {label}
        </StyledButton>
    )
}