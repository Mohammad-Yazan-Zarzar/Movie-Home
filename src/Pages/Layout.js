import React from 'react'
import Bar from '../Components/Bar'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    // <div>Layout</div>
    <>
        <Bar></Bar>
        <Outlet></Outlet>
    </>
    
  )
}

export default Layout