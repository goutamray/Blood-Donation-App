import { createSlice } from "@reduxjs/toolkit";
import { registerDonor, registerPatient } from "./authApiSlice";


// create auth slice 
const authSlice = createSlice({
  name : "auth",
  initialState : {
    user : null,
    message : null,
    error : null,
    loader : false, 
  },
  reducers : {
    setMessageEmpty : (state) => {
       state.error = null,
       state.message = null
    }
  },
  extraReducers : (builder) => {
    builder
    .addCase(registerPatient.pending, (state, action) =>{
      state.loader = true 
    })
    .addCase(registerPatient.rejected, (state, action) =>{
      state.loader = false,
      state.error = action.error.message 
    })
    .addCase(registerPatient.fulfilled, (state, action) =>{
      state.loader = false,
      state.message = action.payload.message 
    }) 
    .addCase(registerDonor.pending, (state, action) =>{
      state.loader = true 
    })
    .addCase(registerDonor.rejected, (state, action) =>{
      state.loader = false,
      state.error = action.error.message 
    })
    .addCase(registerDonor.fulfilled, (state, action) =>{
      state.loader = false,
      state.message = action.payload.message 
    }) 
  } 
})


// selectors
export const authSelect = (state) => state.auth

// actions 
export const {setMessageEmpty } = authSlice.actions; 


// export default 
export default authSlice.reducer; 








