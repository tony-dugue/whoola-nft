import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import Carousel from "../Carousel";
import Button from "../Button";

import { dark } from "../../styles/Themes"

const About = () => {
  return (
   <AboutWrapper id="about">
     <Container>

       <Box><Carousel /></Box>

       <Box>
         <Title>Bienvenue au <br />Whoola Club.</Title>

         <SubText>
           Le WHOOLA CLUB est une collection privée de NFTs, des objets de collection numériques uniques.
           Les Whoolas sont stockés sous forme de jetons ERC-721 sur la blockchain Ethereum et hébergés sur IPFS.
         </SubText>

         <SubTextLight>
           Avec plus de 200 traits dessinés à la main, chaque NFT est unique et s'accompagne d'une adhésion à un groupe exclusif d'investisseurs prospères.
           Rejoignez une communauté ambitieuse en pleine croissance avec de multiples avantages et utilités.
         </SubTextLight>

         <ButtonContainer>
           <ThemeProvider theme={dark}>
             <Button text="REJOIGNEZ NOTRE DISCORD" link="#" />
           </ThemeProvider>
         </ButtonContainer>

       </Box>

     </Container>
   </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70rem) {
    width: 85%;
  }
  @media (max-width: 64rem) {
    width: 100%;
    flex-direction: column;
    
    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40rem) {
    & > *:last-child {
      width: 90%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxl};
  }
`

const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
`

const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxs};
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    
    button {
      margin: 0 auto;
    }
  }
`
