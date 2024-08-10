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
      cartItems: Array.isArray(prevState.cartItems)
        ? [...prevState.cartItems, item] // Append item if cartItems is an array
        : [item], // Initialize with item if cartItems is not an array
    }));
  };

  const removeItemFromCart = (cart, idToRemove) => {
    // Find the index of the item with the specified ID
    const index = cart.findIndex((item) => item._id === idToRemove);
    if (index !== -1) {
      // Remove the item from the cart
      cart.splice(index, 1);
    }

    setContextUser((prevState) => ({
      ...prevState,
      cartItems: cart,
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
        cartItems: userData.cartItems,
      });
    }
  }, []);

  console.log(contextUser);

  return (
    <UserContext.Provider
      value={{
        contextUser,
        setContextUser,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
