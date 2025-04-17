import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useSearchParams } from 'react-router'

import { ThemeContext } from '../context/ThemeContext'

const User = () => {
    const { uid } = useParams()
    console.log(uid)
    const {theme, setTheme} = useContext(ThemeContext)

    const  [searchParam] = useSearchParams()
    console.log(searchParam.get('name'))



    const [users, setUsers] = useState([0,1,2])
    const [currentUsers, setCurrentUsers] = useState({})
  
   let fetchUsers = async () => {
      try {
        let response = await fetch('https://api.escuelajs.co/api/v1/users');
        let users = await response.json();
        setUsers(users);

      
        console.log(users)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    useEffect(()=>{
      fetchUsers()
    },[])


    useEffect(()=>{
      if(!users){
        console.log('no user')
        return
        }      
      let getUser = users.filter((user) => user.id == uid)
      setCurrentUsers(...getUser)
      console.log(currentUsers)
    }, [users])

  return (
    <>
    <div className={`${theme == 'dark'? 'bg-black text-amber-50': 'bg-white text-black'}`}> 
    <h3>{currentUsers?.name}</h3>
    <img src={currentUsers?.avatar} alt=""  className='size-40'/>  
    </div>

    </>
  )
}
export default User