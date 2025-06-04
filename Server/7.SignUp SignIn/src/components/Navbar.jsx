import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <a className="font-bold text-xl tracking-tight">Navbar</a>
      <div className="flex items-center">
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
        <button
          onClick={toggleTheme}
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
        >
          {theme === "light" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
