import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  
    const [user,setUser] = useState(null)


    useEffect(()=>{
        (JSON.parse(window.localStorage.getItem('user')))?
        setUser(JSON.parse(window.localStorage.getItem('user'))):
        null
    },[])

    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider