import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = function (props) {
  const value = {
    isLoggedIn: false,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
