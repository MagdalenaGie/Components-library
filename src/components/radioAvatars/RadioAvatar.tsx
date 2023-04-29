import { FC } from 'react'
import { AvatarBtnProps } from "./RadioAvatar.types"
import styled, { css } from 'styled-components';
import './styles.css'

import cleopatra from './../../assets/avatars/cleopatra.png';
import dwarf from './../../assets/avatars/dwarf.png';
import elf from './../../assets/avatars/elf.png';
import gladiator from './../../assets/avatars/gladiator.png';
import indian from './../../assets/avatars/indian.png';
import knight from './../../assets/avatars/knight.png';
import ninja from './../../assets/avatars/ninja.png';
import princess from './../../assets/avatars/princess.png';
import queen from './../../assets/avatars/queen.png';
import rebel from './../../assets/avatars/rebel.png';
import viking from './../../assets/avatars/viking.png';
import viking2 from './../../assets/avatars/viking2.png';
import warrior from './../../assets/avatars/warrior.png';
import warrior2 from './../../assets/avatars/warrior2.png';
import witch from './../../assets/avatars/witch.png';
import wizard from './../../assets/avatars/wizard.png';
import wizard2 from './../../assets/avatars/wizard2.png';
import { UserCharacter } from '../userInfo';


const Avatar = styled.img`
  border-radius: 100rem;
  border: 2px solid darkturquoise;
  width: 2.5rem;
  height: 2.5rem;
`;

const Covered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const PlayerName = styled.div`
  color: darkturquoise;
  font-size: 14px;
  font-family: 'Montserrat';
  padding-left: 8px;
`;

const AvatarButton = styled.button<AvatarBtnProps>`
  border: red;
  background: transparent;
  width: 100px;
  height: 100px;
  background: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
  }
  ${props => props.selected && css`
  box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
    `}
`

const  RadioAvatar: FC<AvatarBtnProps> = ({id, disabled, avatarId, selected, onClick, ...props}) => {

    const charactersMap = new Map<number, UserCharacter> ([
        [1, {avatarId: 1, characterName: 'Cleopatra', characterImage: cleopatra}],
        [2, {avatarId: 2, characterName: 'Dwarf', characterImage: dwarf}],
        [3, {avatarId: 3, characterName: 'Elf', characterImage: elf}],
        [4, {avatarId: 4, characterName: 'Gladiator', characterImage: gladiator}],
        [5, {avatarId: 5, characterName: 'Indian', characterImage: indian}],
        [6, {avatarId: 6, characterName: 'Knight', characterImage: knight}],
        [7, {avatarId: 7, characterName: 'Ninja', characterImage: ninja}],
        [8, {avatarId: 8, characterName: 'Princess', characterImage: princess}],
        [9, {avatarId: 9, characterName: 'Queen', characterImage: queen}],
        [10, {avatarId: 10, characterName: 'Rebel', characterImage: rebel}],
        [11, {avatarId: 11, characterName: 'Viking', characterImage: viking}],
        [12, {avatarId: 12, characterName: 'Viking2', characterImage: viking2}],
        [13, {avatarId: 13, characterName: 'Warrior', characterImage: warrior}],
        [14, {avatarId: 14, characterName: 'Warrior2', characterImage: warrior2}],
        [15, {avatarId: 15, characterName: 'Witch', characterImage: witch}],
        [16, {avatarId: 16, characterName: 'Wizard', characterImage: wizard}],
        [17, {avatarId: 17, characterName: 'Wizard2', characterImage: wizard2}],
    ]);
    
    const character = charactersMap.get(avatarId);

    return (
        <AvatarButton id={avatarId.toString()} avatarId={avatarId} key={avatarId} selected={selected} onClick={onClick}>
          <Covered>
            <Avatar src={character?.characterImage} alt={"User avatar"}/>
              <PlayerName>{character?.characterName}</PlayerName>
            </Covered>
        </AvatarButton>
    );
}

export default RadioAvatar;