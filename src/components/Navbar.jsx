import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo-transparent-png.png'
import resume from '../assets/pdf/Amar Nabil Taabane-cv (1).pdf'

const Section=styled.div`
display: flex;
justify-content: center;
width: 100%;
@media only screen and (max-width:768px)  {
    width: 100%;
    
}
`
const Container=styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    @media only screen and (max-width:768px)  {
    width: 100%;
    padding: 10px;
    
}
`
const Links=styled.div`
    display:flex;
    align-items: center;
    gap: 50px;
`
const Icons=styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
`
const Logo=styled.img`
    height: 50px;
    `
const List=styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width:768px)  {
    display: none;
    
}
`
const ListItem=styled.li`
    cursor: pointer;
 `
const Icon=styled.img`
    width: 20px;
    cursor: pointer;
`
const Button=styled.a`
    width: 100px;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src={logo}/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Skills</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
               
               <Button download href={resume}>Download</Button>

               
            </Icons>
        </Container>
    </Section>
  )
}
