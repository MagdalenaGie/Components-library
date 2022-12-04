import React from 'react'
import styled from 'styled-components';
import { SelectableCardProps } from './SelectableCard.types';

const CardButton = styled.button<SelectableCardProps>`
    transition: transform ease 300ms;
    background-repeat: no-repeat,
    border: unset;
    &&& {
            border: none;
    }
    background: none;
    cursor: pointer;
    &:hover {
        transform: translate(0, -15px);
    }
`;

const Image = styled.img`
    border-radius: 0.4rem;
    box-shadow: 0px 0px 20px 0px rgba(255, 188, 73, 1);
    width: 6.5rem;
`;

export const SelectableCard: React.FC<SelectableCardProps> = ({value, selected, onClick, ...props}) => {

    const cardImage = require('./../../../assets/cards/card'+ value +'.png')

    return (
        <CardButton type="button" onClick={onClick} value={value} selected={selected} {...props}>
            <Image src={cardImage} />
        </CardButton>
    )
}