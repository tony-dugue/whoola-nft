import React from 'react'
import styled from 'styled-components'
import Banner from "../Banner";
import Logo from "../Logo";

import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Twitter from "../../Icons/Twitter";
import LinkedIn from "../../Icons/LinkedIn";

const Footer = () => {
  return (
   <Wrapper>

     <Banner />

     <Container>
      <Left>
        <Logo />
        <IconList>
          <a href="http://facebook.com" target="_blank" rel="noopener"><Facebook /></a>
          <a href="http://instagram.com" target="_blank" rel="noopener"><Instagram /></a>
          <a href="http://twitter.com" target="_blank" rel="noopener"><Twitter /></a>
          <a href="http://linkedin.com" target="_blank" rel="noopener"><LinkedIn /></a>
        </IconList>
      </Left>
     </Container>

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
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
