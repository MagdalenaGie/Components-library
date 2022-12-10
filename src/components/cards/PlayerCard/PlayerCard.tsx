import React from 'react'
import styled from 'styled-components';
import { PlayerCardProps } from './PlayerCard.types';
import cardBack from './../../../assets/cards/cardback.png';
import cardWait from './../../../assets/cards/cardwait.png';
import spectator from './../../../assets/cards/cardback.png';
import { UserInfo } from '../../userInfo/UserInfo';

const Image = styled.img`
  border-radius: 0.8rem;
  margin: auto;
  width: 10rem;
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

export const PlayerCard: React.FC<PlayerCardProps> = ({value, selected, revealed, player, ...props}) => {

    let cardImage;
    if(selected && revealed && value){
        cardImage = require('./../../../assets/cards/card'+ value +'.png')
    }

    return (
        <Covered>
            <UserInfo player={player}/>
            {player.isSpectator ? <Image src={spectator} /> :
            (revealed ? <Image src={cardImage} /> : (selected ? <Image src={cardBack} /> : <Image src={cardWait} />))}
        </Covered>
    );
}