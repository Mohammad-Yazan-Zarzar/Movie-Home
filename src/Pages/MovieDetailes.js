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
  max-height:2000px;

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
    height:35vh;
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
  max-height:2000px;
  justify-content:space-around;
  flex-wrap:wrap;
  color: #fff;
  text-align:center;


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
// /////////////////////////////////////////
const MovieDetailes = () => {
  const [Image,setImage]=useState('../images/harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg');
  const[backdrop_path,setbackdrop_path]=useState('../images/harry-potter-hermione-and-ron-gi5aixvd4d26cpij.jpg');
  const [dCard,setdCard]=useState([])
  const [movieData,setMovieData]=useState([])
  const imgUrl='https://www.themoviedb.org/t/p/w220_and_h330_face'

 
  const user = useContext(UserContext);
  const [id,setId]=useState(user.detailes);
  useEffect(()=>{

    user.setLoad('yes');

    axios.get(`http://api.themoviedb.org/3/movie/${user.detailes}/credits?api_key=570640b10e7bba620e8de7a7829d94fe`)
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
    axios.get(`http://api.themoviedb.org/3//movie/${user.detailes}?api_key=570640b10e7bba620e8de7a7829d94fe`)
    .then(res=>{

        
        // setdCard(res.data.cast.slice(0,10))
        console.log('detailes is :',res)
        setMovieData(res.data)
        setImage(imgUrl+res.data.poster_path)
        setbackdrop_path(imgUrl+res.data.backdrop_path)
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
       <Heade >
        <HeaderDetailes  style={{ backgroundImage:`url(${Image})` }} >
        </HeaderDetailes>
       
        <HeaderCard image={Image}  style={{ backgroundImage:`url(${Image})` }} ></HeaderCard>
        <HeaderContent>
            <h3>{movieData.title}</h3>
            <h6>{movieData.release_date}</h6>


        </HeaderContent>
        <br></br>
        <Overview>
          <h4>{movieData.overview}</h4>
          {/* <h4>{movieData.overview}</h4> */}

        </Overview>


      </Heade>
      <div >
      <h2>MovieDetailes</h2>
      <Cast>
            <YouTube></YouTube>
            {dCard.map(tr=>(
                <Dcard array={tr}></Dcard>
                // <h3>{tr['character']}</h3>
            )) }

      </Cast>

      

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          
      <br></br>

    </>
   
  )
}

export default MovieDetailes