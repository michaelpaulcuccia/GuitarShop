"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`UserrContext provider is not found`);
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [contextUser, setContextUser] = useState({
    username: "",
    email: "",
    password: "",
    cartItems: [],
  });

  const addItemToCart = (item) => {
    setContextUser((prevState) => ({
      ...prevState,
      cartItems: [item],
    }));
  };

  //CHECK FOR SESSION DATA IN CASE OF REFRESH
  useEffect(() => {
    const serializedData = window.sessionStorage.getItem("userData");
    if (serializedData) {
      const userData = JSON.parse(serializedData);
      setContextUser({
        username: userData.inputUserName,
        email: userData.inputUserEmail,
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
        addItemToCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
