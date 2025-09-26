import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Card from './Card'
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
        
        <Header/>
        <Navbar/>
        <Card>
         <Outlet/>
        </Card>
    </div>
  )
}

export default Layout