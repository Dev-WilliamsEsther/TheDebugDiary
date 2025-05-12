import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const HomeRoutes = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default HomeRoutes