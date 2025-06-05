import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Dashboard() {
  let { user } = useContext(AuthContext);
  console.log("User in Dashboard:", user);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
