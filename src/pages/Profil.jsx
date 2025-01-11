import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import line from '../assets/img/line.png'
import moon from '../assets/img/dev.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import resume from '../assets/pdf/Amar Nabil Taabane-cv (1).pdf'

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
	  width,
	  height
	};
  } 

const Section=styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-snap-align:center;
	justify-content: space-between;
	width: 100%;
	@media screen and (max-width: 768px) {
		height: 200vh ;
	}
`
const Container=styled.div`
	height: 85vh;
	width:75%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
`
const Left=styled.div`

    flex: 5;
	height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
	@media screen and (max-width: 768px) {
		flex:1;
		height: 100vh;
		justify-content: center;
		align-items: center;
		margin: 5%;
	}
`
const Right=styled.div`
	flex:3;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex:1;
		height: 100vh;
		width: 100%;
		overflow: visible;
		
	}
`
const Title=styled.h1`
	font-size:68px;
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
	font-size: 16px;
	color: lightgray;
`
const Button=styled.a`
	background-color: #da4ea2;
	color:white;
	text-align: center;
	text-decoration: none;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`
const Img=styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  position:absolute;
  top: 20%;
  left: 20%;
  right: 0;
  bottom: 0;
  animation: animate 2s  infinite ease alternate;
  @keyframes animate {
	to{
		transform: translateY(20px);
	}
  }
  
`

export const Profile = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>
                   TAABANE AMAR NABIL
                </Title>
                <WhatWeDo>
                    <Line src={line}/>
                    <Subtitles>
                       Web && Mobile developer
                    </Subtitles>
                </WhatWeDo>
                <Disc>
				a specializing in web and mobile development as well as artificial intelligence, I have developed a strong proficiency in these fields. I am passionate about driving innovation and creating cutting-edge technological solutions.
                </Disc>
                <Button download href={resume}>Download Resume</Button>
            </Left>
            <Right>
				<Canvas>
					<Suspense fallback={null}>
						{(getWindowDimensions()> 768) && (<OrbitControls enableZoom={false}   autoRotate/>)}
						<ambientLight intensity={1.5}/>
						<directionalLight position={[3,2,1]}/>
						<Sphere args={[0.75, 100, 200]} scale={2.6}>
							<MeshDistortMaterial
							color="#b828fa"
							attach="material"
							distort={0.5}
							speed={2}
							/>
						</Sphere>
					</Suspense>
          		</Canvas>
                <Img src={moon}/>
            </Right>
        </Container>
    </Section>
  )
}
