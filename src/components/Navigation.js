import React, {useState} from 'react'
import styled from 'styled-components'

import Logo from "./Logo";
import Button from "./Button";

const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = id => {

    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click)
  }

  return (
   <NavigationWrapper id="navigation">
     <NavBar>

       <Logo />

       <HamburgerMenu click={click} onClick={ () => setClick(!click)}>
         &nbsp;
       </HamburgerMenu>

       <Menu click={click}>
         <MenuItem onClick={ () => scrollTo('home')}>Accueil</MenuItem>
         <MenuItem onClick={ () => scrollTo('about')}>A propos</MenuItem>
         <MenuItem onClick={ () => scrollTo('roadmap')}>Roadmap</MenuItem>
         <MenuItem onClick={ () => scrollTo('showcase')}>Showcase</MenuItem>
         <MenuItem onClick={ () => scrollTo('team')}>Team</MenuItem>
         <MenuItem onClick={ () => scrollTo('faq')}>Faq</MenuItem>

         <MenuItem>
           <div className="mobile">
             <Button text="Wallet Connect" link="https://google.com"/>
           </div>
         </MenuItem>
       </Menu>

       <div className="desktop">
         <Button text="Wallet Connect" link="https://google.com"/>
       </div>

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
  
  .mobile {
    display: none;
  }

  @media (max-width: 64rem) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64rem) {
    /* 1024 px */
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    
    opacity: ${props => props.click ? 1 : 0};
    transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)'};
    transition: all 0.3s ease;
    
    flex-direction: column;
    justify-content: center;
  }
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

  @media (max-width: 64rem) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`

const HamburgerMenu = styled.span`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${props => props.theme.text};
  
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 64rem) {
    /* 1024 px */
    display: flex;
  }
  
  &::after, &::before {
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    background: ${props => props.theme.text};
    position: absolute;
    right: ${props => props.click ? '-2px' : '0'};
    transition: all 0.3s ease;
  }
  &::after {
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  &::before {
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`

