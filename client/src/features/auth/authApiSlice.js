
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// patient create 
 export const registerPatient = createAsyncThunk(async(data) => {
      try {
         const response = await axios.post(`http://localhost:5050/api/v1/auth/register`, data); 

         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 })
















