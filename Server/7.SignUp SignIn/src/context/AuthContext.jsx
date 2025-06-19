import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  
  const token = Cookies.get("token");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:4000/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.data); 
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        Cookies.remove("token"); 
        setUser(null); 
      }
    };

    fetchUser();
  }, []);
  
  useEffect(()=>{
    (async()=>{
      try {
      let getUsers = await axios.get('http://localhost:4000/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
      console.log("users:", getUsers.data.data)
      setUsers(getUsers.data.data)
    } catch (error) {
      console.error(error)
    }
    })()
  },[])

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout,users,setUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;