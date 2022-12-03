import React, { FC,Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { NavbarProps, NavbarLink } from './Navbar.types';

const animatedGradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    
    50%{
      background-position: 100% 50%;
    }
    
    100% {
      background-position: 0% 50%;
    }
`

const StyledNavbar = styled.div`
    background-image: linear-gradient(-45deg, #ff5959, #ff4040, #ff0d6e, #ff8033,#d74177);
    box-shadow: 3px 3px 20px #ff3352;
    animation: 12s ${animatedGradient} infinite;
    border-radius: 40px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    height: 60px;
    padding: 8px;
    font-family: 'Anton', sans-serif;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: white;
`;

const NavbarBrand = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: x-large;
`;

const NavbarLogo = styled.img`
    height: 30px;
    margin: 5px;
`;

const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const StyledNavbarLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  margin: 10px 0;
  padding: 5px 10px;
`;


export const  Navbar: FC<NavbarProps> = ({logoPath, label, linkLabels,  ...props}) => {

    let links: Array<JSX.Element> = [];
    linkLabels.forEach(link => links.push(<StyledNavbarLink to={link.linkTo}>{link.label}</StyledNavbarLink>))

    console.log("nav!");
    return (
      <StyledNavbar>
            <NavbarBrand>
                {logoPath!==undefined ? <NavbarLogo src={logoPath}/> : null}
                {label}
            </NavbarBrand>
            <NavbarLinks>
                {links}
            </NavbarLinks>
      </StyledNavbar>
    )
}