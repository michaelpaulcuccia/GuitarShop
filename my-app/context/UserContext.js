"use client";
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`UserrContext provider is not found`);
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [contextUser, setContextUser] = useState({});

  console.log(contextUser);

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
