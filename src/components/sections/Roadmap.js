import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'

import DrawSvg from "../DrawSvg";
import RoadmapItem from "../RoadmapItem";

// gsap
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Roadmap = () => {

  const revealRefs = useRef([])
  revealRefs.current = []

  gsap.registerPlugin(ScrollTrigger)

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useLayoutEffect( () => {

    let tl = gsap.timeline()

    revealRefs.current.forEach( (el, index) => {
      tl.fromTo(
        el.childNodes[0],
        { y: '0' },
        {
          y: '-30%',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            //markers: true
          }
        }
      )
    })
  }, [])

  return (
   <RoadmapWrapper id="roadmap">

    <Title>Roadmap</Title>

     <Container>

      <SvgContainer>
        <DrawSvg />
      </SvgContainer>

       <Items>
         <Item>&nbsp;</Item>
         <RoadmapItem addToRef={addToRefs} title="Créez" subtext="Bro ipsum dolor sit amet bear trap frontside grab sucker hole chillax japan air dirtbag skinny frozen chicken heads dust on crust." />
         <RoadmapItem addToRef={addToRefs} title="Vendez" subtext="Bro ipsum dolor sit amet death cookies rock-ectomy crunchy scream clean avie spread eagle, skid schwag taco." />
         <RoadmapItem addToRef={addToRefs} title="Ajoutez" subtext="Groomer single track park death cookies grind, berm taco mitt booter wack tele avie death cookies pipe backside." />
         <RoadmapItem addToRef={addToRefs} title="Listez" subtext="Wheels park line cornice clean carbon backside Bike." />
         <RoadmapItem addToRef={addToRefs} title="Configurez" subtext="BB free ride acro gear jammer trail swag dirt berm slash Ski." />
         <RoadmapItem addToRef={addToRefs} title="Téléchargez" subtext="Noodle 180 trucks reverse camber berm ripper huck chain suck piste. Switch bunny slope derailleur heli hot dogging liftie." />
       </Items>

     </Container>

   </RoadmapWrapper>
  )
}

export default Roadmap

const RoadmapWrapper = styled.section`
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

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
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

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    height: 170vh;
  }
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }
  
  &>*:nth-of-type(2n+1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 50px 0 50px 0;
        text-align: left;
        
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
  &>*:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: left;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`
