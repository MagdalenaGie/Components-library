import React from 'react'
import styled from 'styled-components';
import { AvatarPrefixes, UserInfoProps } from './UserInfo.types';

const Avatar = styled.img`
  border-radius: 100rem;
  border: 3px solid darkturquoise;
  width: 3rem;
  height: 3rem;
`;

const Covered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; //not sure if this should be
  padding: 4px;
`;

const PlayerName = styled.div`
  font-weight: bold;
  color: darkturquoise;
  font-size: 1.2rem;
  font-family: 'Montserrat';
  padding-left: 8px;
`;

export const UserInfo: React.FC<UserInfoProps> = ({player, ...props}) => {

    const avatar = require('./../../assets/avatars/face'+ player.avatarId +'.png')
    const nickname =  'Admiral' //'face' + avatarId as AvatarPrefixes;
    return (
        <Covered>
            <Avatar src={avatar} />
            <PlayerName>{nickname}<br/>{player.name}</PlayerName>
        </Covered>
    );
}