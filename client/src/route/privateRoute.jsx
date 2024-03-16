import PrivateGard from "./PrivateGard";

import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";




// create private route 
export const privateRoute = [
    {
      element : <PrivateGard />,
      children : [
        {
          element : <PrivateGard />, 
          children : [
            {
              element : <Layout />,
              children : [
                {
                  path : "/dashboard",
                  element : <Dashboard /> 
                }
                
              ] 
            }
          ]
        }
      ]
    }
]  


















