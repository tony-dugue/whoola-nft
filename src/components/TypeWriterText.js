import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from "./Button";

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Découvrez<br/>
        d'extraordinaire

        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFTs.</span>').pauseFor(2000).deleteAll()
              .typeString('<span class="text-2">Objets de collection.</span>').pauseFor(2000).deleteAll()
              .typeString('<span class="text-3">Ape Killers.</span>').pauseFor(2000).deleteAll()
              .start();
          }}
        />
      </Title>

      <SubTitle>Lassé des singes? Essayez de nouvelles choses.</SubTitle>

      <ButtonContainer>
        <Button text="Explorer" link="#about" />
      </ButtonContainer>
    </>
  )
}

export default TypeWriterText

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  
  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
    
    .text-1 {
      color: ${props => props.theme.secondary};
    }
    .text-2 {
      color: ${props => props.theme.ternary};
    }
    .text-3 {
      color: ${props => props.theme.quaternary};
    }
  }

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`

const SubTitle = styled.h3`
  font-size: ${props => props.theme.fontmd};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    
    button {
      margin: 0 auto;
    }
  }
`
