import React from 'react'
import styled from 'styled-components'
import img2 from '../images/harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg';
import { useContext,useEffect,useState } from 'react';
import { UserContext } from '../App';
import YouTube from '../Components/Skeleton';
import Dcard from '../Components/Dcard';
import axios from 'axios';
const HeaderDetailes=styled.div`
  width:100%;

  min-height:70vh;
  height: fit-content;

  /* max-height:100vh; */
  /* height: max-content; */

  /* background-image:url(${props =>props.image}); */
  background-position: center center;
  background-size:cover;
  background-repeat: no-repeat;
  opacity:0.8;
  position: absolute;
  z-index:-1;
  color: #fff;
 
`;
const HeaderCard=styled.div`
    width:200px;
    max-width:40%;
    margin-top:5px;
    /* height:35vh; */
    height: 250px;
    /* left:${props=>props.Location}; */
    background-color:#fff ;
    margin: auto auto;

    /* background-image:url($require({(props) =>{ props.image}})); */
    background-position: center center;
    background-size:cover;
    background-repeat: no-repeat;
    border-radius:25px;
    /* margin-bottom:25px; */

`;
const Heade=styled.div`
  display:flex;
  align-items:center;
  min-height:70vh !important;
  max-height:fit-content;
  justify-content:space-around;
  flex-wrap:wrap;
  color: #fff;
  text-align:center;
  background-position: center center;
  background-size:cover;
  background-repeat: no-repeat;
  opacity:0.8;


`;
const HeaderContent=styled.div`
  width: 50%;
  word-break:keep-all;
`
const Overview=styled.div`
  max-width:90%;
  min-width:90%;
  color: #fff;
`
const Cast=styled.div`
  display:flex;
  overflow-x:scroll;
  ::-webkit-scrollbar {
  /* width: 2px; */
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #222;
}
`
const Title=styled.h2`
  margin-left:10px;
`
const SectionStyle=styled.div`
  background-color:#122c34;
  color: #44CFCB;
  min-height: 400px;
  padding: 5px 5px;
  /* display:flex; */
  /* flex-direction:column; */
  /* align-items:start; */
  /* justify-content:start; */
  /* display:flex; */

`
const SectionStyle2=styled.div`
  background-color:#2a4747;
  color: #44CFCB;
  min-height: 400px;
  padding: 5px 5px;


`
const Font=styled.span`
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  color: #fff;

`
// /////////////////////////////////////////
const MovieDetailes = () => {
  const [Image,setImage]=useState('../images/harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg');
  const[backdrop_path,setbackdrop_path]=useState('../images/harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg');
  const [dCard,setdCard]=useState([])
  const [movieData,setMovieData]=useState([])
  const [productionCompany,setProductionCompany]=useState([])
  
  const imgUrl='https://www.themoviedb.org/t/p/w220_and_h330_face'

 
  const user = useContext(UserContext);
  const [id,setId]=useState(user.detailes);
  useEffect(()=>{
    window.scrollTo(0, 0);

    user.setLoad('yes');

    axios.get(`http://api.themoviedb.org/3/${user.type}/${user.detailes}/credits?api_key=570640b10e7bba620e8de7a7829d94fe`)
    .then(res=>{

        console.log(res.data.cast)
        setdCard(res.data.cast.slice(0,10))
        user.setLoad('No')
        
    })
    .catch(err=>{
        console.log(err)
    }).finally(()=>{
        // user.setLoad('No')
    })
    axios.get(`http://api.themoviedb.org/3/${user.type}/${user.detailes}?api_key=570640b10e7bba620e8de7a7829d94fe`)
    .then(res=>{

        
        // setdCard(res.data.cast.slice(0,10))
        console.log('detailes is :',res)
        setMovieData(res.data)
        setImage(imgUrl+res.data.poster_path)
        setbackdrop_path(imgUrl+res.data.backdrop_path)
        setProductionCompany(res.data.production_companies)
        user.setLoad('No')
        
    })
    .catch(err=>{
        console.log(err)
    }).finally(()=>{
        // user.setLoad('No')
    })
            // eslint-disable-next-line react-hooks/exhaustive-deps

},[user.detailes]);
  return (
    <>
       <Heade style={{ backgroundImage:`url(${Image})` }}>
        {/* <HeaderDetailes  style={{ backgroundImage:`url(${Image})` }} > */}
        {/* </HeaderDetailes> */}
       
        <HeaderCard image={Image}  style={{ backgroundImage:`url(${Image})` }} ></HeaderCard>
        <HeaderContent>
            <h3><Font>{movieData.title}{movieData.name}</Font></h3>

            <h6><Font>{movieData.release_date}</Font></h6>
            <h6><Font>{movieData.first_air_date}</Font></h6>
            {/* <h6>{movieData.number_of_episodes}</h6> */}
            {movieData.number_of_episodes!==undefined?<h6><Font>number of episodes: {movieData.number_of_episodes}</Font></h6>:' '}
            {movieData.number_of_seasons!==undefined?<h6><Font>number of seasons: {movieData.number_of_seasons}</Font></h6>:' '}

        </HeaderContent>
        <br></br>
        <Overview>
          <h4>{movieData.overview}</h4>
          {/* <h4>{movieData.overview}</h4> */}

        </Overview>


      </Heade>
      <SectionStyle >
      <Title>Top 10 in Crew</Title>
      <Cast>
            <YouTube></YouTube>
            {dCard.map(tr=>(
                <Dcard array={tr} path={'profile_path'}></Dcard>
                // <h3>{tr['character']}</h3>
            )) }

      </Cast>
      </SectionStyle>
      <SectionStyle2>
      <Title>production Company</Title>
      <Cast>
            <YouTube></YouTube>
            {productionCompany.map(dr=>(
                <Dcard  array={dr} path={'logo_path'}></Dcard>
                // <h3>{tr['character']}</h3>
            )) }

      </Cast>

      

      </SectionStyle2>
      <br></br>
      <br></br>
      <br></br>
      
          
     

    </>
   
  )
}

export default MovieDetailes