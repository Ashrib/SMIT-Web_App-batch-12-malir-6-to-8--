import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router'
import { Products } from './pages/Products'
import { useQueryClient } from '@tanstack/react-query'
import { Product } from './pages/Product'
import Todos from './pages/Todos'


function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/todos' element={<Todos/>}/>
      </Routes>
        
    </>
  )
}

export default App
