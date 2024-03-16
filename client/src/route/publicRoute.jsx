import Layout from "../components/layout/Layout";
import DonerRegister from "../pages/auth/DonerRegister";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


import PublicGard from "./PublicGard";



// public route    
export const publicRoute = [
   {
    element : <PublicGard />, 
    children : [
      {
        element : <Layout />,
        children : [
          {
            path : "/login",
            element : <Login /> 
          },
          {
            path : "/register",
            element : <Register /> 
          },
          {
            path : "/doner-register",
            element : <DonerRegister /> 
          },
    
        ] 
      }
    ]
   }

] 


