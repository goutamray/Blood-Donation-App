
import { RouterProvider } from 'react-router-dom'
import  router  from "./route/router"  
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoggedInUser } from './features/auth/authApiSlice';

import './App.css'

function App() { 

  const dispatch = useDispatch(); 

  useEffect(() => {

   if (localStorage.getItem("loginUser")) {
      dispatch(getLoggedInUser());
   }

  }, [dispatch]);



  return (
    <>
       <ToastContainer
       style={{ zIndex : "9999999"}}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
       <RouterProvider router={router} />   
    </>
  )
}

export default App
