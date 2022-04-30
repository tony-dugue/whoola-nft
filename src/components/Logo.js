import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
   <LogoText>
     <Link to="/">W.</Link>
   </LogoText>
  )
}

export default Logo

const LogoText = styled.h1`
  font-family: 'Akaya Telivigala', cursive;
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.primary};
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64rem) {
    font-size: ${props => props.theme.fontxxl};
  }
`

