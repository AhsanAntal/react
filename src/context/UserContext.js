import React from "react";
 import { createContext  } from "react";

const CreateAuthContext = createContext(undefined);

const CreateDispatchContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <CreateAuthContext.Provider value={isAuthenticated}>
      <CreateDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </CreateDispatchContext.Provider>
    </CreateAuthContext.Provider>
  );
};

const useCreateAuthContext = () => {
  const context = React.useContext(CreateAuthContext);

  if (context === undefined) {
    throw Error("useCreatrAuthStateContext");
  }

  return context;
};

const useCreateDispatchContext = () => {
  const context = React.useContext(CreateDispatchContext);

  if (context === undefined) {
    throw Error("useCreateAuthDispatchContext");
  }

  return context;
};

const useAuthContext = () => {
  return [useCreateAuthContext, useCreateDispatchContext];
};

export {
  AuthProvider,
  useCreateAuthContext,
  useCreateDispatchContext,
  useAuthContext,
};