import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { UserContext } from '../context/UserContext';

const SignUp = () => {

 const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const {user,setUser} = useContext(UserContext)

  let signUpHandle = async()=>{
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setUser(
          {
            displayName: userData?.displayName,
            photoURL: userData?.photoURL,
            email: userData?.email,
          }
        )
        window.localStorage.setItem('user', JSON.stringify(user))

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        onsole.error('Error:', {code:errorCode,message:errorMessage})
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
      <button onClick={signUpHandle}>signup</button>
    </div>
  )
}

export default SignUp