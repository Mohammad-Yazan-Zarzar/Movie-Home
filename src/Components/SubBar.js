import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { UserContext } from '../App'
import { useContext } from 'react'
const SubBarStyled=styled.div`
    margin-left:10px;
    border-radius:25px;
    border:1px solid #122c34;
    width: 200px;
    /* padding:4px 4px; */
    height: 30px;
    position: relative;
    display: flex;
    justify-content:space-around;
    align-items:center;
    bacKground-color:#fff;
    color: #4ea5d9;
    box-shadow: 1px 2px rgba(50, 50, 70, 0.5);

    

`
const move=keyframes`
    from{ left:0px}

    /* 50%{left:20px}
    80%{right:20px}
    100%{right:5px} */
    to{right:0px}
`
const Ground=styled.div`
    position:absolute;
    left:${props=>props.Location};

    border-radius:25px;
    bacKground-color:#2a4494;
    z-index:1;
    width:50%;
    height: 30px;
    /* opacity:0.8; */
  

`
const BtnStyle=styled.button`
    bacKground-color:transparent;
    border:none;
    z-index:2;
    cursor:pointer;
    color: #4ea5d9;
    font-weight:bold;

    /* &onactive: */
    
    /* margin-left:3px; */
    /* margin-right:3px; */

`;
const geToday=()=>{

}

const SubBar = (props) => {
const [anime,setAnime]=useState('0px')
const user = useContext(UserContext);

const getWeek=()=>{
    setAnime('100px')
    user.setLoad('yes');
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=570640b10e7bba620e8de7a7829d94fe',{
        headers: {
            "Content-Type": "application/json"
        }})
        .then(res=>{
            console.log(res.data.results)
            props.setTrend(res.data.results)
            user.setLoad('No')
        })
        .catch(err=>{
            console.log(err)
        }).finally(()=>{
            // user.setLoad('No')
        })
}
const getToday=()=>{
    setAnime('0px')
    user.setLoad('yes');

    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=570640b10e7bba620e8de7a7829d94fe',{
        headers: {
            "Content-Type": "application/json"
        }})
    .then(res=>{
        console.log(res.data.results)
        props.setTrend(res.data.results)
        user.setLoad('No');

        
    })
    .catch(err=>{
        console.log(err)
    }).finally(()=>{
        // user.setLoad('No')
    })
}
  return (
    <SubBarStyled>
        <Ground Location={anime}></Ground>
        <BtnStyle onClick={getToday}>Today</BtnStyle>
        <BtnStyle onClick={getWeek}>This Week</BtnStyle>

    </SubBarStyled>
  )
}

export default SubBar