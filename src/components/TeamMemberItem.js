import React from 'react'
import styled from 'styled-components'

const TeamMemberItem = ({ img, name = " ", position = " " }) => {
  return (
   <ItemContainer>
     <ImgContainer>
       <img src={img} alt={name} />
     </ImgContainer>
     <Name>{name}</Name>
     <Position>{position}</Position>
   </ItemContainer>
  )
}

export default TeamMemberItem

const ItemContainer = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  
  &:hover {
    img {
      transform: translateY(-1rem) scale(1.1);
    }
  }
`

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${props => props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.primaryRgba}, 0.9)`};
  font-weight: 400;
`
