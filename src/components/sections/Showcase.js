import React, {useRef} from 'react'
import styled, {keyframes} from 'styled-components'

import ShowcaseNftItem from "../ShowcaseNftItem";

import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img4 from '../../assets/Nfts/bighead-3.svg'
import img5 from '../../assets/Nfts/bighead-4.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'
import img7 from '../../assets/Nfts/bighead-6.svg'
import img8 from '../../assets/Nfts/bighead-7.svg'
import img9 from '../../assets/Nfts/bighead-8.svg'
import img10 from '../../assets/Nfts/bighead-9.svg'

const Showcase = () => {

  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
   <ShowcaseWrapper id="showcase">
     <Row direction="none" ref={Row1Ref}>
       <ShowcaseNftItem img={img1} number={852} price={1} passRef={Row1Ref} />
       <ShowcaseNftItem img={img2} number={123} price={1.2} passRef={Row1Ref} />
       <ShowcaseNftItem img={img3} number={456} price={2.5} passRef={Row1Ref} />
       <ShowcaseNftItem img={img4} number={666} price={3.5} passRef={Row1Ref} />
       <ShowcaseNftItem img={img5} number={452} price={4.7} passRef={Row1Ref} />
     </Row>

     <Row direction="reverse" ref={Row2Ref}>
       <ShowcaseNftItem img={img6} number={888} price={1.2} passRef={Row2Ref} />
       <ShowcaseNftItem img={img7} number={211} price={3.2} passRef={Row2Ref} />
       <ShowcaseNftItem img={img8} number={455} price={1.8} passRef={Row2Ref} />
       <ShowcaseNftItem img={img9} number={456} price={5.1} passRef={Row2Ref} />
       <ShowcaseNftItem img={img10} number={865} price={3.7} passRef={Row2Ref} />
     </Row>
   </ShowcaseWrapper>
  )
}

export default Showcase

const ShowcaseWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &>*:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  &>*:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`

const move = keyframes`
  0% { transform: translateX(100%) }
  100% { transform: translateX(-100%) }
`

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  
  animation: ${move} 20s linear infinite ${props => props.direction};
`
