import React from 'react'
import Navbar from '../component/Navbar'

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