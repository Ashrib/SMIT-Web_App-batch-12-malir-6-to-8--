import React from 'react'
import Navbar from '../components/Navbar'

import {useNavigate} from 'react-router'

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div>Home page</div>
    <button onClick={()=>{
      // .../request
      // then()
      navigate('/about');
    }}>log in</button>

    
    </>
  )
}
export default Home