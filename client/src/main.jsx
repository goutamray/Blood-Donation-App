import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from './app/store.js'
import 'react-toastify/dist/ReactToastify.css';

import "./assets/frontend/css/bootstrap.min.css"
import "./assets/frontend/plugins/fontawesome/css/fontawesome.min.css"
import "./assets/frontend/plugins/fontawesome/css/all.min.css"
import "./assets/frontend/css/feather.css"
import "./assets/frontend/plugins/apex/apexcharts.css"
import "./assets/frontend/css/custom.css"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}> 
       <App />
    </Provider> 
  </React.StrictMode>, 
)





