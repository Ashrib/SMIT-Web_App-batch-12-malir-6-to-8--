import { useContext, useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ThemeContext } from "./context/ThemeContext.jsx";
function App() {
  const { theme } = useContext(ThemeContext);
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
      </div>
    </>
  );
}

export default App;
