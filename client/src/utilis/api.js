
import axios from "axios";


// create axios instance 
const API = axios.create({
  baseURL : "http://localhost:5050/",
  timeout : 200000,
  withCredentials: true,
});


// export instance 
export default API;











