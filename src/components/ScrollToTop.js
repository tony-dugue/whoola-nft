import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import {useWindowScroll} from "react-use";

const ScrollToTop = () => {

  const ref = useRef(null)
  const {y} = useWindowScroll()

  const scrollToTop = () => {

    let element = document.getElementById("navigation")

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  useLayoutEffect( () => {
    ref.current.style.display = (y > 200) ? "flex" : "none"
  }, [y])

  return (
   <Up ref={ref} onClick={ () => scrollToTop()}>&#x2191;</Up>
  )
}

export default ScrollToTop

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`
