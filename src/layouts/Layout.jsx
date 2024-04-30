import React from 'react'

import { Outlet } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'





export const Layout = () => {
  return (
   <div   >
<Navbar></Navbar>
   <Outlet>
    <Home></Home>
   </Outlet>
  
  

   </div>
  )
}
