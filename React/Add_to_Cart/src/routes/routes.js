import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import NotFound from "../pages/NotFound.jsx";
import Auth from "../pages/Auth.jsx";

export let router = createBrowserRouter([
    {
      path: "/",
      Component: App,
     
    },
    {
        path: "/auth",
        Component: Auth,
        children:[
            {
                index:true,
                Component: Login
            },
            {
                path:'signup',
                Component: SignUp,
            }
        
        ]
       
      },
      {
        path: '*',
        Component: NotFound,
      }
  ]);
