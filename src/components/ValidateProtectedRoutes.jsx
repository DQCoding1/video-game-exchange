import React, {useContext} from "react";
import { PublicRoutes } from "../routes/routes";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/User";



const ValidateProtectedRoutes = ({ children }) => {
  const userContextInfo = useContext(UserContext)

  if (userContextInfo.userInfo.userName) {
    return children;
  } else {
    return <Navigate to={`${PublicRoutes.SIGNUP}`} replace={true}/>;
  }
};

export default ValidateProtectedRoutes;
