import React from "react";

import { Navigate } from "react-router-dom";
import { useCreateAuthContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const userAuth = useCreateAuthContext();

  if (!userAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
