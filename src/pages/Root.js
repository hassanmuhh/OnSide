import React from 'react'
import MainNav from '../components/MainNav/MainNav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <>
      <MainNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root