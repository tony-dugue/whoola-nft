import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
   <NavigationWrapper>
     <NavBar>
       <h2>Logo</h2>
       <h2>Menu</h2>
       <h2>Button</h2>
     </NavBar>
   </NavigationWrapper>
  )
}

export default Navigation

const NavigationWrapper = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body}
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`
