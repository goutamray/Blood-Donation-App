import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateGard = () => {
    // private gard user 
    const { user } = useSelector((state) => state.auth); 

    if (user) {
       return <Outlet />;
    }else{
      return <Navigate to="/login" />
    }

}

export default PrivateGard;     













