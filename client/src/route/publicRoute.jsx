import Layout from "../components/layout/Layout";
import DonerRegister from "../pages/auth/DonerRegister";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";


// public route 
export const publicRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/dashboard",
        element : <Dashboard /> 
      },
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


