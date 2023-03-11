import React from 'react'
import styled, {css} from 'styled-components';
import { SelectableCardProps } from './SelectableCard.types';
import card0 from './../../../assets/cards/card0.png';
import card1 from './../../../assets/cards/card1.png';
import card2 from './../../../assets/cards/card2.png';
import card3 from './../../../assets/cards/card3.png';
import card5 from './../../../assets/cards/card5.png';
import card8 from './../../../assets/cards/card8.png';
import card13 from './../../../assets/cards/card13.png';
import card21 from './../../../assets/cards/card21.png';
import card34 from './../../../assets/cards/card34.png';
import card55 from './../../../assets/cards/card55.png';
import card89 from './../../../assets/cards/card89.png';
import cardback from './../../../assets/cards/cardback2.png';


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

const SelectableCard: React.FC<SelectableCardProps> = ({value, selected, onClick, ...props}) => {

    const cardMap = new Map<number, string> ([
        [0, card0],
        [1, card1],
        [2, card2],
        [3, card3],
        [5, card5],
        [8, card8],
        [13, card13],
        [21, card21],
        [34, card34],
        [55, card55],
        [89, card89]
    ]);

    const cardImage = cardMap.get(value) || cardback;

    return (
        <CardButton type="button" onClick={onClick} value={value} selected={selected} {...props}>
            <Image src={cardImage} alt={"cardImage"} />
        </CardButton>
    )
}

export default SelectableCard;