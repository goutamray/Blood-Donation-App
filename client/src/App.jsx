
import { RouterProvider } from 'react-router-dom'
import  router  from "./route/router"  
import { ToastContainer } from 'react-toastify';
import './App.css'


function App() { 
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
