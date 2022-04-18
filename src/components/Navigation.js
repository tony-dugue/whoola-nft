import React from 'react'
import styled from 'styled-components'

import Logo from "./Logo";
import Button from "./Button";

const Navigation = () => {
  return (
   <NavigationWrapper>
     <NavBar>

       <Logo />

       <Menu>
         <MenuItem>Accueil</MenuItem>
         <MenuItem>A propos</MenuItem>
         <MenuItem>Roadmap</MenuItem>
         <MenuItem>Showcase</MenuItem>
         <MenuItem>Team</MenuItem>
         <MenuItem>Faq</MenuItem>
       </Menu>

       <Button text="Wallet Connect" link="https://google.com"/>

     </NavBar>
   </NavigationWrapper>
  )
}

export default Navigation

const NavigationWrapper = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body}
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;
  
  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
  &:hover {
    color: ${props => props.theme.primary};
    
    &::after {
      width: 100%;
    }
  }
`

