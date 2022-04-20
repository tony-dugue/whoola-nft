import React from 'react'
import styled from 'styled-components'
import DrawSvg from "../DrawSvg";

const Roadmap = () => {
  return (
   <Wrapper>

    <Title>Roadmap</Title>

     <Container>
      <SvgContainer>
        <DrawSvg />
      </SvgContainer>
     </Container>

   </Wrapper>
  )
}

export default Roadmap

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  position: relative;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
