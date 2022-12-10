import React from 'react'
import styled, {css} from 'styled-components';
import { SelectableCardProps } from './SelectableCard.types';

const CardButton = styled.button<SelectableCardProps>`
    flex: 1 1 0;
    display: flex;
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
    ${props => props.selected && css`
        transform: translate(0, -15px);
    `}
`;

const Image = styled.img`
    border-radius: 0.4rem;
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
    width: 100%;
`;

export const SelectableCard: React.FC<SelectableCardProps> = ({value, selected, onClick, ...props}) => {

    const cardImage = require('./../../../assets/cards/card'+ value +'.png')

    return (
        <CardButton type="button" onClick={onClick} value={value} selected={selected} {...props}>
            <Image src={cardImage} />
        </CardButton>
    )
}