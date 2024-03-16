
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
 });  
 
 
// register Donor 
 export const registerDonor = createAsyncThunk(
  "auth/registerDonor", 
  async(data) => {
      try {
         const response = await axios.post(`http://localhost:5050/api/v1/auth/register`, data, {
          withCredentials: true,
         }); 

         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 });   


// login user  
 export const loginUser = createAsyncThunk(
  "auth/loginUser", 
  async(data) => {
      try {
         const response = await axios.post(`http://localhost:5050/api/v1/auth/login`, data, {
          withCredentials: true,
         }); 

         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 });   


// logout user  
 export const logoutUser = createAsyncThunk(
  "auth/logoutUser", 
  async() => {
      try {
         const response = await axios.post(`http://localhost:5050/api/v1/auth/logout`,  {
          withCredentials: true,
         }); 

         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 });   
















