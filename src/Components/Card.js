import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActionArea,CardActions } from '@mui/material';
import styled from 'styled-components';
import Rate from './Rate';
import {Link}  from "react-router-dom";
import { UserContext } from '../App';
import { useContext } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const CardMediaStyle=styled.div`
  width:300px;
  height:200px;
 
  background-image:url(${props=>props.image});
  background-size:100% 100%;
  background-position:center center;
  display:flex;
  align-items:end;

  
`
const CardStyle=styled(Card)`
  width:${props=>props.maxWidth}!important;
  min-width:100px;
  word-break: keep-all;
  /* max-width:300px; */
`
const LinkStyle=styled(Link)`
     /* font-style:none; */
     color: #44CFCB;
     text-decoration: none;

`
export default function ECard(props) {
  const user = useContext(UserContext);

  const imgUrl='https://www.themoviedb.org/t/p/w220_and_h330_face'
  return (
    <CardStyle sx={{ maxWidth:250,marginLeft:2 ,maxHeight:350,marginRight:2,marginTop:5,backgroundColor:'#122c34',color:'#4ea5d9',minWidth:250}}>
      <LinkStyle to="/Movie-Detailes" onClick={()=>{
        user.setDetailes(props.array.id)
        user.setType('movie')
        // user.setGround(imgUrl+props.array.poster_path)
        // user.setGround('yazan')

      }}>
      <CardActionArea>
        <CardMediaStyle
          component="div"
          
          image={imgUrl+props.array.poster_path}
          alt="green iguana"
          sx={{height:'200px'}}

        >
          <Rate ev={(props.array.vote_average)/2.0}></Rate>

        </CardMediaStyle>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'bold'}}>
          {props.array.title}{props.array.name}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
          {props.array.release_date}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
              {props.array.overview}
          </Typography> */}
        </CardContent>
      </CardActionArea></LinkStyle>

      <CardActions>
        <Button size="small" color="primary">
          <PlaylistAddIcon onClick={()=>{
            user.setAlertOpacity(1)
            setTimeout(()=>user.setAlertOpacity(0),1000)
          }}>

          </PlaylistAddIcon>
        </Button>
        {props.array.vote_average/2.0}
        


      </CardActions>
    </CardStyle>
  );
}
