import { createSlice } from "@reduxjs/toolkit";


// create auth slice 
const authSlice = createSlice({
  name : "auth",
  initialState : {
    user : null,
    message : null,
    error : null,
    loader : false, 
  },
  reducers : "",
  extraReducers : (builder) => {

  }
})


// selectors

// actions 



// export default 
export default authSlice.reducer; 








