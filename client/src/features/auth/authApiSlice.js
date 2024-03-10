
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// register patient 
 export const registerPatient = createAsyncThunk(
  "auth/registerPatient", 
  async(data) => {
      try {
         const response = await axios.post(`http://localhost:5050/api/v1/auth/register`, data, {
          withCredentials: true,
         }); 

         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 }) 
















