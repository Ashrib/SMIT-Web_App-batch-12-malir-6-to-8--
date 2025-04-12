import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FirstFloor from './pages/FirstFloor.jsx'
import FoodCourt from './pages/FoodCourt.jsx'
import Shop from './pages/Shop.jsx'
import Navbar from './component/Navbar.jsx'


function App() {

  return (
      <>
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/settings' element={<h1>Settings</h1>}/>

          <Route path='/firstfloor' element={<FirstFloor/>}>
          <Route index element={<Shop/>}/> 
          <Route path='foodcourt' element={<FoodCourt />}/>
        </Route>

          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>

      </>
  )
}

export default App
