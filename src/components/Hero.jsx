import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import line from '../assets/img/line.png'
import moon from '../assets/img/moon.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'

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
const Left=styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
`
const Right=styled.div`
	flex:3;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Title=styled.h1`
	font-size:74px;
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
const Img=styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: animate 2s  infinite ease alternate;
  @keyframes animate {
	to{
		transform: translateY(20px);
	}
  }
`

export const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>
                    Think. Make. Solve.
                </Title>
                <WhatWeDo>
                    <Line src={line}/>
                    <Subtitles>
                        What we do
                    </Subtitles>
                </WhatWeDo>
                <Disc>
                    We enjoy creating delightful, human-centred digital experiences.
                </Disc>
                <Button>Learn more</Button>
            </Left>
            <Right>
				<Canvas>
					<Suspense fallback={null}>
						<OrbitControls enableZoom={false}  autoRotate/>
						<ambientLight intensity={1}/>
						<directionalLight position={[3,2,1]}/>
						<Sphere args={[0.75, 100, 200]} scale={2.4}>
							<MeshDistortMaterial
							color="#70ccd8"
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
