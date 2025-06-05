import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
import Cookies from "js-cookie";
import axios from "axios";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async()=>{
      try {
        if(!user){
      const token = Cookies.get('token');
      console.log("Token from cookies:", token);
      if(token){
        // Fetch user data with the token
          let response = await axios.get('http://localhost:4000/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setUser(response.data);
      }
    }
      } catch (error) {
        console.error("Error fetching user data:", error);
        
      }
    })()
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;