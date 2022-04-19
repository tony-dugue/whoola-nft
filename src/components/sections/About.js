import React from 'react'
import styled from 'styled-components'

import Carousel from "../Carousel";

const About = () => {
  return (
   <AboutWrapper>
     <Container>
       <Box><Carousel /></Box>
       <Box>Text</Box>
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
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
