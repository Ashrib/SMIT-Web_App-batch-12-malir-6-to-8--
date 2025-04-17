import React from 'react'
import { Outlet,Link } from 'react-router'
import Navbar from '../components/Navbar'

const FirstFloor = () => {
  return (
    <>
    <Navbar/>
    
    <div>FirstFloor</div>
    <button >
      <Link to={'/firstfloor/foodcourt'}>
      food
      </Link>
      </button>
      
    <Outlet/>
    </>
  )
}

export default FirstFloor