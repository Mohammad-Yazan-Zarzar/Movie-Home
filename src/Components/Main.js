import styled from 'styled-components';
// import './Main.css'
import img from './harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg'
import { useState } from 'react';
import SearchInput from './SearchInput';
import { getTrending } from '../Functions/getTrending';
import Grid from '@mui/material/Grid';
const img2 ='https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg';

// const imageUrl='./harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg'
const MainStyleMd=styled.div`
    /* background-color:#224870; */
    background-color:#2a4747;
    min-height: 50vh;
    /* max-height: 600px; */
    width:100%;
    margin:auto;
    /* background-image: url(${img2}); */
    background-position: center center;
    background-size:cover;
    background-repeat: no-repeat;
    /* background-attachment:fixed; */
    display:flex;
    /* padding:10px 10px */
    align-items:center;
    opacity:1;
    z-index:1;
    position: relative;
    /* justify-content:space-around; */

    /* border-bottom-right-radius: 20px; */
    /* border-bottom-left-radius: 20px; */

`;

const HeadeItem=styled.img`
  width: 70%;
  height: 50vh;
  background-color:#224870;
  background-image: url(${img}); 
  background-position: center center;
  background-size:100% 100%;
  background-repeat: no-repeat;
  opacity:0.4;
  position: absolute;
  z-index:-1;
  right:0px;
  bottom: 0px;
  margin-top:5px ;
  margin-right:5px;
  
  border:0.5px solid  #224870 ;
  outline:none;
  /* align-items:center; */


`
const HeadeWelcome=styled.div`
  /* width:50%; */
  color: #fff;
  z-index:2;
  position: absolute;
  opacity: 1.1 !important;
  margin-left:10px;
  /* text-align:center; */
  font-weight:bold;
  font-size: 2em;
  font-weight: 700;
  line-height: 1;

`;

const Main = () => {
  const[size,setSize]=useState(window.screen.width)
  console.log(window.screen.width)
  // getTrending()
    return (
      <MainStyleMd   >
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12} md={2}> */}
        <HeadeWelcome>
          Welcome
          <br></br>
          Millions of movies, TV shows and people to discover.<br></br> 
          Explore now.
        </HeadeWelcome>
        {/* </Grid> */}
        {/* <Grid item xs={12} md={8} sx={{backgroundColor:'#224870'}}> */}
          <HeadeItem>
          {/* <img src='C:/Users/User/Desktop/React-Pro/movie-app/src/images/a.jpg'alt='thanks' ></img> */}
          </HeadeItem>
        {/* </Grid> */}
        

        {/* </Grid> */}
        
        
        {/* <SearchInput></SearchInput> */}
  
      </MainStyleMd>
    )

  
  
 
 
}

export default Main