import React, { use, useContext, useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../utils/Firebase';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router';



const Login = () => {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const {user,setUser} = useContext(UserContext)
  const navigate = useNavigate()


  const loginHandle = async()=>{
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const userData = userCredential.user;

      console.log(userData.email)

      setUser({
        displayName: userData?.displayName,
        photoURL: userData?.photoURL,
        email: userData?.email,
      })

      window.localStorage.setItem('user', JSON.stringify({
        displayName: userData?.displayName,
        photoURL: userData?.photoURL,
        email: userData?.email,
      }))

      navigate('/home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', {code:errorCode,message:errorMessage})
    });


  }


  return (
    <div>

      <input type="text" placeholder='enter email' 
      onChange={(e)=>setEmail(e.target.value)}
      
      />

      <input type="text" placeholder='enter password'
      onChange={(e)=>setPassword(e.target.value)}
      
      />
      <button onClick={loginHandle}>login</button>
    </div>
  )
}

export default Login