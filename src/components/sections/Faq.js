import React from 'react'
import styled from 'styled-components'

const Faq = () => {
  return (
   <Wrapper>
    <Title>Faq</Title>
   </Wrapper>
  )
}

export default Faq

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.primary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;
`
