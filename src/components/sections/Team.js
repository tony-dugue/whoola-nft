import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img4 from '../../assets/Nfts/bighead-3.svg'
import img5 from '../../assets/Nfts/bighead-4.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'
import img7 from '../../assets/Nfts/bighead-6.svg'
import img8 from '../../assets/Nfts/bighead-7.svg'
import img9 from '../../assets/Nfts/bighead-8.svg'

import TeamMemberItem from "../TeamMemberItem";
import ConfettiAnimation from "../ConfettiAnimation";

const Team = () => {
  return (
   <TeamWrapper id="team">

     <ConfettiAnimation />

     <Title>Team</Title>

     <Container>
       <TeamMemberItem img={img1} name="SKYBLAZE" position="fondateur" />
       <TeamMemberItem img={img2} name="MEGNUM" position="co-fondateur" />
       <TeamMemberItem img={img3} name="MONKEY KING" position="CEO" />
       <TeamMemberItem img={img4} name="BLACK PANTHER" position="Chef de projet" />
       <TeamMemberItem img={img5} name="DEATHSTROKE" position="Artiste" />
       <TeamMemberItem img={img6} name="LAZY LONG" position="Social Media Manager" />
       <TeamMemberItem img={img7} name="CYBER PUNK" position="Spécialiste Blockchain" />
       <TeamMemberItem img={img8} name="MONK" position="Développeur Web3" />
       <TeamMemberItem img={img9} name="BANANA" position="Graphiste / Designer" />
     </Container>

   </TeamWrapper>
  )
}

export default Team

const TeamWrapper = styled.section`
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

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`
