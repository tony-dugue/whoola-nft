import React from 'react'
import styled from 'styled-components'

import Accordion from "../Accordion";

const Faq = () => {
  return (
   <Wrapper>

    <Title>Faq</Title>

     <Container>

       <Box>
         <Accordion title="OU PUIS-JE VOIR MES NFTS ?">Une fois acheté, connectez-vous simplement à votre compte OpenSea pour voir vos NFTs.</Accordion>
         <Accordion title="QU'EST-CE QUE LE METAVERSE ?">Un métaverse est un réseau de mondes virtuels 3D axé sur la connexion sociale. En science-fiction, il est souvent décrit comme une itération hypothétique d'Internet en tant que monde virtuel unique et universel facilité par l'utilisation de casques de réalité virtuelle et augmentée.</Accordion>
         <Accordion title="POURQUOI AVONS-NOUS BESOIN D'UNE COMMISSION ?">Le montant des commissions a été fixé à 5% pour financer les projets du Whoola Club. Nous avons l'ambition d'organiser de multiples événements à travers le monde afin de renforcer la communauté et de construire un réseau d'entrepreneurs et d'investisseurs partageant le même état d'esprit et les intérêts communs.</Accordion>
       </Box>

       <Box>
         <Accordion title="COMMENT UTILISER MON NFT ?">Vous pourrez utiliser votre NFT comme avatar dans le Metaverse et notre futur jeu vidéo. Détenir un NFT, c'est aussi faire partie d'un réseau exclusif d'investisseurs et d'entrepreneurs.</Accordion>
         <Accordion title="QUI SONT LES WHOOLAS ?">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.</Accordion>
         <Accordion title="QUELLE-EST LE PROCESSUS DE FUSION ?">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.</Accordion>
       </Box>

     </Container>

   </Wrapper>
  )
}

export default Faq

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Box = styled.div`
  width: 45%;
`
