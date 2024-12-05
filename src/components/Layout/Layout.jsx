import React from 'react'
import Navbar from '../Navbarr/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Secondfooter from '../Secondfooter/Secondfooter'
import Mynavbar from '../Navbarr/Navbar'

export default function Layout() {
  return (
    <>
    <Mynavbar/>
    <Outlet/>
    <Footer/>
    <Secondfooter/>
    </>
  )
}
