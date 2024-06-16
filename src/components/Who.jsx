import React from 'react'
import styled from 'styled-components'
import line from '../assets/img/line.png'
//import moon from '../assets/img/moon.png'

const Section=styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-snap-align:center;
	justify-content: space-between;
	width: 100%;
`
const Container=styled.div`
	height: 100vh;
	width:70%;
	display: flex;
	justify-content: space-between;
 
`
const Right=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
`
const Left=styled.div`
	flex:1;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Title=styled.h1`
	font-size:48px;
`
const WhatWeDo=styled.div`
	display:flex;
	align-items: center;
	gap:10px;
`
const Line=styled.img`
  height: 5px;
  
`
const Subtitles=styled.h2`
	color:#da4ea2;
`
const Disc=styled.div`
	font-size: 24px;
	color: lightgray;
`
const Button=styled.button`
	background-color: #da4ea2;
	color:white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`


export const Who = () => {
  return (
    <Section>
      
        <Container>
            <Left>
             
            </Left>
            <Right>
            	<Title>Think outside the square space</Title>
            	<WhatWeDo>
            		<Line src={line} />
                	<Subtitles>Who we Are</Subtitles>
            	</WhatWeDo>
            	<Disc>
                a creative group of designers and developers with a passion for the
                arts.
              	</Disc>
              	<Button>See our works</Button>
            </Right>
        </Container>
    </Section>
  )
}
