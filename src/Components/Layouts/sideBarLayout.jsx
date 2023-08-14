import React from 'react'
import Navbar from '../../Components/NavBar/navbar'
import SideBar from '../../Components/SideBar/sideBar'
import { Outlet } from 'react-router-dom'
export default function SideBarLayout() {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Outlet/>
    </>
  )
}
