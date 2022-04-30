import React from 'react'
import styled from 'styled-components'

const RoadmapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Title>{title}</Title>
          <SubTitle>{subtext}</SubTitle>
        </Box>
      </ItemContainer>
    </Item>
  )
}

export default RoadmapItem

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.primary};

  @media (max-width: 48em) {
    width: 70%;
  }
`

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.primary};
`

const Title = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm};
  text-transform: capitalize;
  color: ${props => props.theme.quaternary};
  
  font-weight: 400;
  margin: 0.5rem 0;
`

