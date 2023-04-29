import React from 'react'
import styled from 'styled-components';
import { PlayerCardProps, StyledCardFaceProps, StyledCardImageProps } from './PlayerCard.types';
import UserInfo from '../../userInfo';
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
import cardBack from './../../../assets/cards/cardback2.png';
import cardWait from './../../../assets/cards/cardwait2.png';
import spectator from './../../../assets/cards/spectator.png';


const Image = styled.img<StyledCardImageProps>`
  border-radius: 0.8rem;
  margin: auto;
  // width: 5rem;
  width: ${props => 
    props.size === "small" ? "4rem" : (props.size === "medium" ? "6rem" : "8rem")};
  background: red;
  margin-top: 5px;
  box-shadow: 0px 0px 7px 0px darkturquoise;
`;

const Covered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledFlippableCard = styled.div`
    position: relative;
`;

const StyledCardFace = styled.div<StyledCardFaceProps>`
    transform: perspective(1000px) rotateY(${props => props.revealed ? "180deg" : "0"}); 
    backface-visibility: hidden;  
    transition: transform 2s;

    position: absolute;
    width: 100%;
    height: 100%;

    /* To center content */
    display: flex;
    justify-content: center;
    align-items: center;
`;


const PlayerCard: React.FC<PlayerCardProps> = ({value, selected, revealed, player, size, ...props}) => {

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

    let cardImage;
    if(selected && revealed && value && cardMap.get(value)){
        cardImage = cardMap.get(value);
    }

  return (
    <Covered>
        <UserInfo player={player} size={size}/>
        {player.isSpectator ? <Image src={spectator} alt={"cardSpectator"}/> :  
          <StyledFlippableCard>
            <StyledCardFace revealed={!revealed}>
              <Image src={cardImage} alt={"cardImage"} size={size}/>
            </StyledCardFace>
            <StyledCardFace revealed={revealed}>
              <Image src={selected ? cardBack : cardWait} alt={"CardBack"}/>
            </StyledCardFace>
          </StyledFlippableCard> }
    </Covered>
  );
}

export default PlayerCard;