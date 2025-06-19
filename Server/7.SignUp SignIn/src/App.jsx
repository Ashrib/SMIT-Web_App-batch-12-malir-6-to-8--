import { useContext, useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ThemeContext } from "./context/ThemeContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import Chat from "./pages/Chat.jsx";
function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext); // Assuming user is provided by AuthContext
  console.log("User in App:", user);
  return (
    <>
      <div
        className={
          theme === "dark"
            ? "bg-black text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar />
          {user ? (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route
            path="*"
            element={<Dashboard />
            }
          ></Route>
        </Routes>
          ) : (
              <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-[93vh]">
                <h1 className=" text-6xl">404 Error Page Not Found !</h1>
              </div>
            }
          ></Route>
        </Routes>
          )}
          
      </div>
    </>
  );
}

export default App;
