import React, { useState } from 'react'
import styled from 'styled-components'
import { React3D } from '../components/React3D'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Laravel3d } from '../components/Laravel3d'
import { ReactNative3d } from '../components/ReactNative3d'
import { Python3d } from '../components/Python3d'


const data = [
  'React JS',
  'React Native',
  'Laravel',
  'Python'
]

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
  @media  only screen and (max-width: 768px){
      flex:1;
      width:90%;
  }
 
`

const List=styled.ul`
	list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
	
`

const ListItem=styled.li`
	font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  display: block;
  position: relative;
  -webkit-text-stroke: 1px white;
  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
  
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`
const Left=styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
    @media  only screen and (max-width: 768px){
      flex:1;
      width:100%;
  }
`
const Right=styled.div`
	flex:5;
	display: flex;
  cursor: grab;
	justify-content: center;
	align-items: center;
  @media  only screen and (max-width: 768px){
    display: none;
  }
`


export const Tech = () => {

  const [logo,setLogo]=useState(data[0]);
 
  const handle_logo = (item) =>{
    setLogo(item);
  }

  const Selected_logo =()=>{
    switch(logo){
      case 'React JS':
        return <React3D />
      case 'React Native':
        return <ReactNative3d />
      case 'Laravel':
        return <Laravel3d />
      case 'Python':
        return <Python3d />
      default:
        return <React3D />
    }
  }
  return (
    <Section>
      
        <Container>
            <Left>
              <List>
                {data.map((item)=>{
                  return(<ListItem text={item} onMouseEnter={()=>handle_logo(item)}>{item}</ListItem>)
                })}
              </List>
            </Left>
            <Right>
                <Canvas>
                  <OrbitControls enableZoom={false}  autoRotate/>
                  {Selected_logo()}
                              
                </Canvas>
                
            </Right>
        </Container>
    </Section>
  )
}
