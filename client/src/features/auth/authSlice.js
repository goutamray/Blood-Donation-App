import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerDonor, registerPatient } from "./authApiSlice";


// create auth slice 
const authSlice = createSlice({
  name : "auth",
  initialState : {
    user : localStorage.getItem("loginUser") ? JSON.parse(localStorage.getItem("loginUser")) : null,
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
    // register patient 
    .addCase(registerPatient.pending, (state ) =>{
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
    // regiser doner 
    .addCase(registerDonor.pending, (state ) =>{
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
    // login user 
    .addCase(loginUser.pending, (state ) =>{
      state.loader = true 
    })
    .addCase(loginUser.rejected, (state, action) =>{
      state.loader = false,
      state.error = action.error.message 
    })
    .addCase(loginUser.fulfilled, (state, action) =>{
      state.loader = false,
      state.message = action.payload.message ,
      state.user = action.payload.user ,
      localStorage.setItem("loginUser", JSON.stringify(action.payload.user))
    }) 
    // logout user 
    .addCase(logoutUser.pending, (state ) =>{
      state.loader = true 
    })
    .addCase(logoutUser.rejected, (state, action) =>{
      state.loader = false,
      state.error = action.error.message 
    })
    .addCase(logoutUser.fulfilled, (state, action) =>{
      state.loader = false,
      state.message = action.payload.message ,
      state.user = null,
      localStorage.removeItem("loginUser") 
    }) 
  } 
})


// selectors
export const authSelect = (state) => state.auth

// actions 
export const {setMessageEmpty } = authSlice.actions; 


// export default 
export default authSlice.reducer; 








