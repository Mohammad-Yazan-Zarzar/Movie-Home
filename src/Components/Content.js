import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect,useContext,useState } from 'react'
import { UserContext } from "../App";
import ECard from '../Components/Card'
import YouTube from '../Components/Skeleton'
import SearchIcon from '@mui/icons-material/Search';
const ContentStyle=styled.div`
  width:90%;
  background-color:#2a4747;
  margin:auto auto;
  border-radius:10px;
  min-height:60vh;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
  padding-bottom:5px;


`
const FilterBar=styled.div`
    width:95%;
    background-color:#a4bef3;
    height:50px;
    margin: auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius:10px ;  
    display:flex;
    align-items:center;
    color: #2a4747;
    margin-bottom:5px ;
    justify-content:space-around;
    
`
const SearchField=styled.input`
    width: 90%;
    outline:none;
    background-color:transparent ;
    /* border:solid 1px :#2a4747; */
    /* border-radius:20px; */
    border: none;
    padding: 5px 5px;
    text-align:center;

`
const SearchBox=styled.div`
    width: 70%;
    outline:none;
    background-color:#fff ;
    border:solid 1px :#2a4747;
    border-radius:20px;
    padding: 5px 5px;
    display: flex;
    align-items:center;
    position: relative;
    /* text-align:center; */

`
const SelectStyle=styled.select`
    background-color:#2a4747 ;
    padding: 5px 5px;
    border-radius:10px ;
    background-color:#122c34 ;
    color: #44CFCB;

`
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const Content = () => {
    
    const user = useContext(UserContext);

    const [movieData,setMovie]=useState([]);
    const [input,setInput]=useState('');
    const search=(ev)=>{
        // console.log('hi',ev.key)
        // if(ev.key==='Enter'){
        if(input!==''){
            console.log(input)
          user.setLoad('yes');
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=570640b10e7bba620e8de7a7829d94fe&query=${input}`)
          .then((res)=>{
            console.log(res.data.items)
            setMovie(res.data.results)
            user.setLoad('No')          })
          .catch(err=>console.log(err))
          .finally(()=>{
            //  setLoader('')
          })

        }
        if(input!==''){
            user.setLoad('No')
        }

        //  let APIKey='AIzaSyCKX2rpbsj4XZU20FLOC9shxSmpLBZdf2w'
          
        // }
      }

    const getMovie=(by)=>{
        user.setLoad('yes');
  
        axios.get(`https://api.themoviedb.org/3/movie/${by}?api_key=570640b10e7bba620e8de7a7829d94fe`)
        .then(res=>{
  
            console.log(res.data.results)
            setMovie(res.data.results)
            user.setLoad('No')
            
        })
        .catch(err=>{
            console.log(err)
        }).finally(()=>{
            // user.setLoad('No')
        })
    }
    useEffect(()=>{
        user.setLoad('yes');
  
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=570640b10e7bba620e8de7a7829d94fe')
        .then(res=>{
  
            console.log(res.data.results)
            setMovie(res.data.results)
            user.setLoad('No')
            
        })
        .catch(err=>{
            console.log(err)
        }).finally(()=>{
            // user.setLoad('No')
        })
        
    },[]);
  return (
    <>
        <FilterBar>
            <SearchBox>
                <SearchField placeholder='Search'onChange={(e)=>{setInput(e.target.value)}} value={input} onKeyUp={search}></SearchField>
                <SearchIcon sx={{position:'absolute' ,right:0}}></SearchIcon>
               
            </SearchBox>
            <SelectStyle name="cars" id="cars" onChange={()=>{
                            console.log(document.getElementById('cars').value)
                            getMovie(document.getElementById('cars').value)



                        }} >
                    <option value="popular">popular</option>
                    <option value="top_rated">top_rated</option>
                    {/* <option value="latest" >latest</option> */}
                    <option value="upcoming">upcoming</option>
            </SelectStyle>
        </FilterBar>
        <ContentStyle>
            <YouTube></YouTube>
            <YouTube></YouTube>
                {movieData.map(tr=>(
                <ECard array={tr} ></ECard>
                )) }
        </ContentStyle>
    </>
   
  )
}

export default Content