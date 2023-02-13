import React from "react";
import { PublicRoutes } from "../routes/routes";
import { Navigate } from "react-router-dom";

const ValidateProtectedRoutes = ({ children }) => {
  const userStorage = localStorage.getItem("userStorage");
  if (userStorage) {
    return children;
  } else {
    return <Navigate to={`${PublicRoutes.SIGNUP}`} />;
  }
};

export default ValidateProtectedRoutes;
