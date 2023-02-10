import { useState,useEffect,useContext } from "react";
import React from 'react'
import SubBar from "../Components/SubBar";
// import { getTrending } from "../Functions/getTrending";
import axios from "axios";
import styled from "styled-components";
import ECard from "../Components/Card";
import { style } from "@mui/system";
import img3 from '../images/mainTrend1.jpg'
import { UserContext } from "../App";
import YouTube from "../Components/Skeleton";
const TrendingStyle=styled.div`
    width:90%;
    /* bacKground-color:#031d44; */
    /* bacKground-color:#fff; */
    margin:auto auto;
    /* padding:5px 5px; */
    min-height: 400px;
    color: #2a4494;
    overflow-y: hidden;
`
const SectionHead=styled.div`
    display:flex;
    align-items:center;
`
const SectionMain=styled.div`
    display:flex;
    bacKground-color:#031d44;
    color: #fff;
    overflow-x:scroll;
    justify-content:start;
    align-items:start;
    background-image: url(${img3});
    background-position: center center;
    background-size:100% 500px;
    background-repeat: no-repeat;
    /* background-attachment:fixed; */
    box-shadow: 2px 4px #224870;

    min-height: 420px;
    border-radius:5px;
    /* padding-top:10px ; */
    /* ----- */
    /* width */
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
    /* ----- */

`

const Trending = () => {
    const user = useContext(UserContext);

    const [trendData,setTrend]=useState([]);
    useEffect(()=>{
        user.setLoad('yes');

        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=570640b10e7bba620e8de7a7829d94fe')
        .then(res=>{

            console.log(res.data.results)
            setTrend(res.data.results)
            user.setLoad('No')
            
        })
        .catch(err=>{
            console.log(err)
        }).finally(()=>{
            // user.setLoad('No')
        })
        
    },[]);
    // setTrend(result.data.results)

    console.log('yazan')
    console.log('state',trendData)
  return (

    <TrendingStyle>

        {/* <h1>{user.load}</h1> */}

        <SectionHead>
            <h2>
                Trending
            </h2>
            <SubBar setTrend={setTrend}></SubBar>

        </SectionHead>
        
        <SectionMain>
            <YouTube></YouTube>
            {trendData.map(tr=>(
                <ECard array={tr}></ECard>
            )) }  

        </SectionMain>
        <br></br>
          
    </TrendingStyle>
  )
}

export default Trending