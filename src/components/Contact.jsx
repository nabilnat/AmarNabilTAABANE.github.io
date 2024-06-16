import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'


const Section=styled.div`
  height: 100vh;
  scroll-snap-align:center;

`
const Container=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
	gap:50px;
`
const Left=styled.div`
	flex:1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const Right=styled.div`
	flex:1;

`
const Form=styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap:25px;
`
const Title=styled.h1`
	font-weight: 200;
`
const Input=styled.input`
	padding: 20px;
	background-color: #ececec;
	border: none;
	border-radius: 5px;

`
const Textarea=styled.textarea`
	padding: 20px;
	background-color: #ececec;
	border: none;
	border-radius: 5px;
`
const Button=styled.button`
	padding: 20px;
	font-weight: bold;
	color: white;
	background-color: #da4ea2;
	border: none;
	border-radius: 5px;
`


export const Contact = () => {
	const form = useRef();
	const [success,setSuccess]=useState(null);
	const handleSubmit =(e)=>{
		e.preventDefault();

		emailjs
		  .sendForm('service_jaapi7g', 'template_jvap86z', form.current, {
			publicKey: '2YVdoE28a00eFjP75',
		  })
		  .then(
			() => {
				setSuccess(true);
			},
			(error) => {
				setSuccess(false);
			},
		  );
	
	}
	
  return (
    <Section>
		<Container>
			<Left>
				<Form ref={form} onSubmit={handleSubmit}>
					<Title>Contact US</Title>
					{success && 
					"Your message has been sent"
					}
					<Input placeholder='Name' name='name'/>
					<Input placeholder='Email' name='email'/>
					<Textarea placeholder='Write your message'  name='message' rows={10}/>
					<Button type="submit">send</Button>
					
				</Form>
			</Left>
			<Right>
				<Map/>
			</Right>
		</Container>
    </Section>
  )
}
