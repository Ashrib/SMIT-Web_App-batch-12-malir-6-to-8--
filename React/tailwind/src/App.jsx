import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx';


function App() {

  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(async()=>{
    console.log('use effect')
    try {
      await fetch('').then()
    } catch (error) {
    }

  },[isLoggedIn])


  return (
    <>
    <button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
    }}>change</button>

    {/* navbar */}
      <Navbar checkLog={isLoggedIn}/>

      {/* header */}
      <Header/>


    <div className='w-[100vw] bg-sky-500'
    onClick={()=>{
      console.log('clicked div elm ')
    }}>

    <button
    className='outline-3'
    onClick={(e)=>{
      e.stopPropagation();
       console.log('clicked ')
    }}>click me</button>
    </div>

    <div className='bg-amber-300 flex flex-col md:flex-row items-center gap-2 '>
      <button className='hover:outline-8 '>button 1</button>
      <button className='hover:outline-8 w-30'>button 2</button>
      <button className='hover:outline-8 w-30'>button 3</button>
      <button className='hover:outline-8 w-30'>button 4</button>
      <button className='hover:outline-8 w-30'>button 5</button>
      <div className='size-20 mt-20 bg-green-400 border-amber-950 rounded-full'>a</div>
      </div>
    </>
  )
}

export default App
