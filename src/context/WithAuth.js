import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = function (props) {
  const router = useRouter();

  const login = (authToken) => {
    localStorage.setItem("Authorisation", authToken);
    router.push("/transactions");
  };

  const logout = () => {
    localStorage.removeItem("Authorisation");
  };

  const value = {
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
