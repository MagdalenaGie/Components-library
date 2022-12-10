import React, { useState } from 'react'
import styled from 'styled-components';
import { SelectableCard } from '../SelectableCards/SelectableCard';
import { CardsToSelectProps } from './CardsToSelect.types';

const CardsList = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  bottom: 5vh;
`;

export const CardsToSelect: React.FC<CardsToSelectProps> = ({...props}) => {

    const [selected, setSelected] = useState(-1)

    const handleCardClicked = (event: React.MouseEvent<HTMLButtonElement>, value: number) => {
        // will be sending request
        setSelected(value)
        // console.log(value)
        // console.log("cicked")
    }

    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    let cards: JSX.Element[] = []
    fibonacci.forEach( el => {
        cards.push(<SelectableCard value={el} selected={el===selected} onClick={(e) => handleCardClicked(e, el)}/>)
    })

    return (
        <CardsList>
            {cards}
        </CardsList>
    )
}