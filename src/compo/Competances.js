import { Avatar, Card, Typography } from "@mui/material";
import python from '../assets/image/python.png'
import php from '../assets/image/php.png'
import react from '../assets/image/react.png'
import sql from '../assets/image/sql.png'
import javascript from '../assets/image/javascript.png'
import laravel from '../assets/image/laravel.png'
import typescript from '../assets/image/typescript.png'
import wordpress from '../assets/image/wordpress.png'
import django from '../assets/image/django.png'
 
function Competences(){

    return(
        <div>
            <Card sx={{margin:5,padding:5}}>
                <Typography variant="h2">
                Competences
                </Typography>
                <div className="Imagelist" >
                
                    <Avatar src={python} sx={{height:256,width:256}}/>
                    <Avatar src={php} sx={{height:256,width:256}}/>
                    <Avatar src={react} sx={{height:256,width:256}}/>
                    <Avatar src={django} sx={{height:256,width:256}}/>
                    <Avatar src={sql} sx={{height:256,width:256}}/>
                    <Avatar src={javascript} sx={{height:256,width:256}}/>
                    <Avatar src={typescript} sx={{height:256,width:256}}/>
                    <Avatar src={laravel} sx={{height:256,width:256}}/>
                    <Avatar src={wordpress} sx={{height:256,width:256}}/>
                 </div>
            </Card>
        </div>
    )

}
export default Competences;