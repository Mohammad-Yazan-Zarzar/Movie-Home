import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActionArea,CardActions } from '@mui/material';
import styled from 'styled-components';
// import Rate from './Rate';
const CardMediaStyle=styled.div`
  width:200px;
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
export default function DCard(props) {
    const imgUrl='https://www.themoviedb.org/t/p/w500'
  return (
    <CardStyle sx={{ maxWidth:200,marginLeft:2 ,maxHeight:350,marginRight:2,marginTop:5,backgroundColor:'#122c34',color:'#4ea5d9',minWidth:200,cursor:'none'}}>
      <CardActionArea sx={{cursor:'default' ,":hover":'none'}} >
        <CardMediaStyle
          component="div"
          
          image={imgUrl+props.array[props.path]}
          // image={imgUrl+props.array['logo_path']}

          alt="green iguana"
          sx={{height:'200px'}}

        >
          {/* <Rate ev={(props.array.vote_average)/2.0}></Rate> */}

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
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        {props.array.vote_average/2.0}
        


      </CardActions> */}
    </CardStyle>
  );
}
