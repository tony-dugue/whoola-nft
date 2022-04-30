import React from 'react'
import styled from 'styled-components'
import Banner from "../Banner";
import Logo from "../Logo";

import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Twitter from "../../Icons/Twitter";
import LinkedIn from "../../Icons/LinkedIn";

const Footer = () => {

  const scrollTo = id => {

    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
   <Wrapper>

     <Banner />

     <Container>
      <Left>

        <Logo />

        <IconList>
          <a href="http://facebook.com" target="_blank" rel="noreferrer"><Facebook /></a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
          <a href="http://twitter.com" target="_blank" rel="noreferrer"><Twitter /></a>
          <a href="http://linkedin.com" target="_blank" rel="noreferrer"><LinkedIn /></a>
        </IconList>

      </Left>

      <MenuItems>
        <Item onClick={ () => scrollTo('home')}>Accueil</Item>
        <Item onClick={ () => scrollTo('about')}>A propos</Item>
        <Item onClick={ () => scrollTo('roadmap')}>Roadmap</Item>
        <Item onClick={ () => scrollTo('showcase')}>Showcase</Item>
        <Item onClick={ () => scrollTo('team')}>Team</Item>
        <Item onClick={ () => scrollTo('faq')}>Faq</Item>
      </MenuItems>

     </Container>

     <Bottom>
       <span>&copy; {new Date().getFullYear()} Whoola Club. Tous droits réservés</span>
       <span>Made with &#10084;</span>
     </Bottom>

   </Wrapper>
  )
}

export default Footer

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: relative;
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-bottom: 1px solid ${props => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;
    
    h1 {
      font-size: ${props => props.theme.fontxxxl};
    }
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`

const Item = styled.li`
  width: fit-content;
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

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    
    span {
      margin-bottom: 1rem;
    }
  }
`
