import { useSelector } from "react-redux";
import { authSelect } from "../features/auth/authSlice";


const useAuth = () => {
   const { user } = useSelector(authSelect);


  return{ auth : user };
}

export default useAuth; 













