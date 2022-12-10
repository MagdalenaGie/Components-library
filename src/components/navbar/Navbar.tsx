import React, { FC, Fragment } from 'react'
import styled from 'styled-components';
import { UserInfo } from '../userInfo/UserInfo';
import logo from './../../assets/logo.png';
import { NavbarProps } from './Navbar.types';

const StyledNavbar = styled.div`
    height: 60px;
    padding: 8px;
    font-family: 'Montserrat';
    background-color: black;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: white;
    box-shadow: 0px 0px 3px 0px rgb(172, 171, 169);
`;

const NavbarBrand = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: x-large;
    font-weight: bold;
`;

const PlayerGameInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const NavbarLogo = styled.img`
    height: 30px;
    margin: 5px;
`;

const GameName = styled.div`
  color: white;
  font-size: 1.2rem;
  font-family: 'Montserrat';
  padding-left: 8px;
  text-align: end;
  padding-right:8px;
`;


export const  Navbar: FC<NavbarProps> = ({player, inGame, gameName, gameGuid,  ...props}) => {
    
    return (
      <StyledNavbar>
            <NavbarBrand>
                <NavbarLogo src={logo}/>
                Planning poker
            </NavbarBrand>
            { inGame ?
            <PlayerGameInfo>
              <GameName>In room:<br/>{gameName}</GameName>
              { player ? <UserInfo player={player}/> : null }
            </PlayerGameInfo>
            : null}
      </StyledNavbar>
    )
}