import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'

import {useNavigate, Outlet, Link} from 'react-router'

const Users = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([0,1,2])
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

  
  return (
    <>
    <Navbar/>
    <div>All Users </div>
    <div className='flex flex-col'>
    {
      users.map((user,i)=>(
        <div key={user?.id} className='border-2 flex flex-col justify-center items-center'>
        <h4>{user?.name}</h4>
        <img src={user?.avatar} alt=""  className='size-30'/>
        <span>
          <Link to={`/users/${user?.id}`}>view profile</Link>
        </span>
        </div>
      ))
    }
    </div>
 
    </>
  )
}
export default Users