import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useParams } from 'react-router'

const User = () => {
    const { uid } = useParams()
    console.log(uid)

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
    <div> 
    <h3>{currentUsers?.name}</h3>
    <img src={currentUsers?.avatar} alt=""  className='size-40'/>  
    </div>

    </>
  )
}
export default User