import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logout(); 
    navigate("/signIn"); 
  };

  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl tracking-tight">
        Navbar
      </Link>
      <div className="flex items-center">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            >
              Sign Up
            </Link>
            <Link
              to="/signIn"
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            >
              Sign In
            </Link>
          </>
        )}
        <button
          onClick={toggleTheme}
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}