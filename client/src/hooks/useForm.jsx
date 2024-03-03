import { useState } from "react";

const useForm = (initialState) => {
   // state init
   const [input, setInput ] = useState(initialState);

   // onchange input 
   const handleInputChange = (e) => {
     setInput((prevState) => ({
      ...prevState, 
      [e.target.name] : e.target.value
     }))
   };

  // reset form 
  const resetForm = () => {
    setInput(initialState)
  }; 

  return{input, setInput, handleInputChange, resetForm};
}

export default useForm; 















