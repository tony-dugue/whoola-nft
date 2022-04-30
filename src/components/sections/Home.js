import React from 'react'
import styled, {keyframes} from 'styled-components'

import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'

const Home = () => {

  const scrollTo = id => {

    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
   <HomeWrapper id="home">

     <Container>
       <Box><TypeWriterText /></Box>
       <Box><CoverVideo /></Box>
     </Container>

     <Round onClick={ () => scrollTo('showcase')}>
       <Circle>&#x2193;</Circle>
       <img src={RoundTextBlack} alt="NFT" />
     </Round>

   </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem) {
    width: 85%;
  }
  @media (max-width: 48rem) {
    flex-direction: column-reverse;
    width: 100%;
    
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 50%;
  
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64rem) {
    width: 4rem;
    height: 4rem;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48rem) {
    right: 1rem;
  }
`

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-size: 1.5rem;

  @media (max-width: 64rem) {
    width: 2rem;
    height: 2rem;
    font-size: ${props => props.theme.fontlg};
  }
`

