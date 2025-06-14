import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Dashboard() {
  let { user } = useContext(AuthContext);
  let [users, setUsers] = useState([]);
  console.log("User in Dashboard:", user);
  useEffect(async () => {
    try {
      let response = await axios.get('http://localhost:4000/users', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      console.log("Users fetched:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

  }, []);

  let handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log("User deleted:", userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Users List</h2>
          {users?.map(user => (
            <div key={user.id}>
              {(user.isAdmin?
              <div>
                <button onClick={() => handleDeleteUser(user.id)}>delete user</button>
              </div>
              : null
              )}
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>  
            </div>
          ))}
      </div>
    </div>
  );
}
