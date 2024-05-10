import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import adcertif from '../assets/image/adcertif.png'
import homeai from '../assets/image/HomeAI.png'
import garini from '../assets/image/login.png'
import scout  from '../assets/image/scout.png' 
function Projets(){

    return(
        <div>
            <Card sx={{margin:5,padding:5}}>
                <h1>
                Projets
                </h1>
                <div className="Imagelist">
                <Card sx={{minWidth: 345 ,margin:1}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={scout}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        platforme de scout
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        une plate-forme nationale de scouts algérienne  pour gérer les adhérents la cotisation et même les missions
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="https://baramidj.net/kechafa/">visiter le demo</a>
                    </CardActions>
                </Card>
                <Card sx={{minWidth: 345 ,margin:1}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={garini}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        application Garini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       une application mobile avec leur back office fait pour un startup Garini pour gérer reservation des place de stationnement 
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="https://app.garini.dz/portal/">visiter le demo</a>
                    </CardActions>
                </Card>

                <Card sx={{minWidth: 345 ,margin:1}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={adcertif}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Adcertif 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        creer une site e-learning  pour faire les cour et les examan  online
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="https://baramidj.net/adcertif/">visiter le demo</a>
                    </CardActions>
                </Card>

                <Card sx={{minWidth: 345 ,margin:1}}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={homeai}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        homeAI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        outils intelligante pour aider le ingénieure de decoration
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <a href="http://homeai.fr/">visiter le demo</a>
                    </CardActions>
                </Card>
                  
                </div>
            </Card>
        </div>
    )

}
export default Projets;