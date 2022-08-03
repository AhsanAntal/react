import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthContext } from "../context/UserContext";

const SignInRoute = ({ children }) => {
    
  const userAuth =useCreateAuthContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SignInRoute;