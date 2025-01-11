import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import scout from '../assets/image/scout.png'
import adcertif from '../assets/image/adcertif.png'
import HomeAI from '../assets/image/HomeAI.png'
import garini from '../assets/image/garini.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card,  CardContent, CardMedia, Typography } from '@mui/material';

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
`

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	adaptiveHeight: false
  };


  function Img(props) {
	const[show,setShow] = useState(false);
	const {src, disc, title } = props;
	const shows=()=>{
		setShow(true)
	}
	const hide=()=>{
		setShow(false)
	}
	return (
	  <div style={{position:"relative"}} onMouseEnter={()=>shows()} onMouseLeave={()=>hide()}>
		<img src={src} style={{width:"100%",objectFit:"cover",borderRadius:5}} />
		<div style={{position:"absolute" ,bottom:0 ,backgroundColor:"rgba(58, 6, 82, 0.868)",width:"90%",marginLeft:"5%", marginBottom:"5%" ,borderRadius:10 ,display:(show)?"block":"none"}}>
			<h2 style={{marginLeft:"5%"}}>{title}</h2>
			<div style={{marginLeft:"5%",marginBottom:"5%"}}>{disc}</div>
		</div>
	  </div>
	);
  }

export const Projects = () => {
  return (
    <Section>
		{( getWindowDimensions().width> 768) && (<div className="slider-container" style={{width:"70%",marginTop:"auto",marginBottom:"auto"}}>
			<Slider {...settings}  >
				
					<Img src={scout} title="Scout" disc={"A national platform for Algerian scouts to manage members, membership fees, and even missions."}/>
					
				
					<Img src={adcertif} title="Ad-certif" disc={"An e-learning site to conduct courses and exams online."}/>
					
				
					<Img src={HomeAI} title="HomeAI" disc={"Intelligent tools to assist decoration engineers."}/>
					
				
				
					<Img src={garini} title="Garini" disc={"A mobile application with a back office developed for a startup called Garini to manage parking space reservations."}/>
			</Slider>
		</div>)}
		{ (getWindowDimensions().width<= 768) && (<div className="slider-container" style={{width:"90%",marginTop:"auto",marginBottom:"auto"}}>
			<Slider {...settings} arrows={false} >
                <Card sx={{Width: "100%" ,  Height:"100%" ,backgroundColor:"rgb(255,255,255,0.3)"}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={scout}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white">
						Scout
                    </Typography>
                    <Typography variant="body1"  color="lightgray">
						A national platform for Algerian scouts to manage members, membership fees, and even missions.
                    </Typography>
                    </CardContent>
                </Card>
                <Card sx={{Width: "100%" , Height:"100%" ,backgroundColor:"rgb(255,255,255,0.3)"}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={garini}
                    
                    />
                    <CardContent>
					<Typography gutterBottom variant="h4" component="div" color="white">
						Garini
                    </Typography>
					<Typography variant="body1"  color="lightgray">
					A mobile application with a back office developed for a startup called Garini to manage parking space reservations.
                    </Typography>
                    </CardContent>
                    
                </Card>

                <Card sx={{Width: "100%" ,  minHeight:"100%" ,backgroundColor:"rgb(255,255,255,0.3)"}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={adcertif}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white">
						Ad-certif
                    </Typography>
                    <Typography variant="body1"  color="lightgray">
						An e-learning site to conduct courses and exams online.
						<br/>
						<br/>
                    </Typography>
                    </CardContent>
                   
                </Card>

                <Card sx={{Width: "100%", Height:"100%",backgroundColor:"rgb(255,255,255,0.3)"}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={HomeAI}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white">
						HomeAI
                    </Typography>
                    <Typography variant="body1"  color="lightgray">
						A mobile application with a back office developed for a startup called Garini to manage parking space reservations.
                    </Typography>
                    </CardContent>
                   
                </Card>
				</Slider>
        </div>)}
    </Section>

  )
}
