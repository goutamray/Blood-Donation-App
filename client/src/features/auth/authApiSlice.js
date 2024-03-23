
import { createAsyncThunk } from "@reduxjs/toolkit"; 
import API from "../../utilis/api"; 

// register patient 
 export const registerPatient = createAsyncThunk(
  "auth/registerPatient", 
  async(data) => {
      try {
         const response = await API.post(`/api/v1/auth/register`, data ); 
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
         const response = await API.post(`/api/v1/auth/register`, data ); 
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
         const response = await API.post(`/api/v1/auth/login`, data ); 
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
         const response = await API.post(`/api/v1/auth/logout`); 
         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 });   


// get logged in user data  
 export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser", 
   async() => {
      try {
         const response = await API.get(`/api/v1/auth/me`); 
         return response.data;

      } catch (error) {
        throw new Error(error.response.data.message)
      }
 });   
















