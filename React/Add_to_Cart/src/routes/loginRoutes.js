import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import NotFound from "../pages/NotFound.jsx";
import Auth from "../pages/Auth.jsx";
import Blog from "../pages/Blog.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import { Layout } from "../pages/Layout.jsx";


export let loginRouter = createBrowserRouter(

  
  [
    {
      path: "/",
      Component: Layout,
     
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
        path: "/blog",
        Component: Blog,
       
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: '*',
        Component: NotFound,
      }
  ]
 

);
