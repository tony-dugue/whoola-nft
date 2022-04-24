import React from 'react'
import styled from 'styled-components'
import Banner from "../Banner";

const Footer = () => {
  return (
   <Wrapper>
     <Banner />
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
