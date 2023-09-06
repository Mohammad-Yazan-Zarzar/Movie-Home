import React from 'react'
import Bar from '../Components/Bar'
import { Outlet, Link } from "react-router-dom";
import Footer from '../Components/Footer'
const Layout = () => {
  return (
    // <div>Layout</div>
    <>
        <Bar></Bar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
    
  )
}

export default Layout