import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.js";
import { loginRouter } from "./routes/loginRoutes.js";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <RouterProvider router={user ? loginRouter : router} />
    </>
  );
}
export default App;
