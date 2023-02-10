import React from 'react'
import Header from './Home.style'
import Bar from '../Components/Bar'
import Main from '../Components/Main';
import styled from 'styled-components';
import Trending from './Trending';
import Popular from '../Components/Popular';
const Home = () => {
  return (
    <>
    <div>
    <Header>
        {/* <Bar></Bar> */}
        <Main></Main>
      </Header>
      <Trending/>

    </div>
    <Popular></Popular>
      
      <br></br>
      {/* <Popular/> */}

    </>
    

  )
}

export default Home