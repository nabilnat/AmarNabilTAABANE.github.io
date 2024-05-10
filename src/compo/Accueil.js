import { Avatar, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import nabil from '../assets/image/Nabil.jpg'

function Accueil (){
    const [i,setI]=useState(0)
    let specialite=['Web','Mobile','intelligence artificielle']
    let temp=i;
    useEffect(() => {
       setTimeout(() => {
        if(i>=2) 
            setI(0) 
        else  
        setI(temp+1)        
       }, 3000);
        
      });
    return(
        <div>
            <Card sx={{margin:5,padding:5}}>
                <h1>Bienvenue sur mon portfolio</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Typography variant='h2'>
                    Bonjour je suis NABIL
                </Typography>

                <Typography variant='h4'>
                    un developeur <span>{specialite[i]}</span>
                </Typography>
                <Typography variant='h5'>
                je étudiant en Génie des technologies de l'Information a l'ETS, spécialisé en développement web, mobile
                et intelligence artificielle. Fort d'une maîtrise dans ce domaine, je suis passionné par l'innovation
                et la création de solutions technologiques de pointe.
                </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Avatar src={nabil}  sx={{ width: 365, height: 365 ,marginLeft:'auto'}}/>
                    </Grid>
                </Grid>
                
                
            </Card>
        </div>
    )
}
export default Accueil;