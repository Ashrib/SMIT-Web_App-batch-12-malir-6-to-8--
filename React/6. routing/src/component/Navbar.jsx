import React from 'react'
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <nav >
    <ul style={{display:'flex', gap:'5px', listStyle:'none'}}>

      <li>
        <Link to={'/'}>
        home
        </Link>
        
        </li>
      <li>
      <Link to={'/about'}>
      about
        </Link>
        
        </li>
      <li>
      <Link to={'/settings'}>
        setting
        </Link>
        </li>
      <li>
      <Link to={'/firstfloor'}>
        firstfloor
        </Link>
        </li>
        <li>
      <Link to={'/users'}>
        Users
        </Link>
        </li>
    </ul>
  </nav>
  )
}

export default Navbar