import React, { useContext } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router';

export const AcmeLogo = () => {
    return (
      <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  };


const Nav = () => {

    const {user} = useContext(UserContext)

console.log(user)

  return (
    <Navbar>
    <NavbarBrand>
      <AcmeLogo />
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link aria-current="page" href="#">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link to={'/login'}>Login</Link>

      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
        <Link to={'/signup'}>sign up</Link>

      </NavbarItem>
      <NavbarItem>
       {user?.email}
      </NavbarItem>
    </NavbarContent>
  </Navbar>

  )
}

export default Nav