import React from 'react'
import styled from 'styled-components'
import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";

const Home = () => {
  return (
   <HomeWrapper>
     <Container>
       <Box><TypeWriterText /></Box>
       <Box><CoverVideo /></Box>
     </Container>
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
  //background-color: lightblue;
  
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

