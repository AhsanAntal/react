import React from "react";

import { Navigate } from "react-router-dom";
import { useCreateDispatchContext } from "../context/UserContext";

const SignOutRoutes = () => {
  const { handleAuthChange } = useCreateDispatchContext();

  handleAuthChange(false);

  return <Navigate to="/" />;
};

export default SignOutRoutes;
