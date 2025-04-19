import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import { Link } from 'react-router'

const Home = () => {

  const { user } = useContext(UserContext)
  console.log(user)
  console.log(user)
  return (
    <div>Home


      <h2>{user?.email}</h2>

      <Link to={'/edit?name=abc'}>edit</Link>

    </div>
  )
}

export default Home