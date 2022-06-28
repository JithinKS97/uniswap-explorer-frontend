import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = function (props) {
  const router = useRouter();

  const isLoggedIn = () => {
    const authToken = localStorage.getItem("Authorisation");
    return !!authToken;
  };

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

  useEffect(() => {
    if (router.asPath === "/" && isLoggedIn()) {
      router.push("/transactions");
    } else if (!isLoggedIn() && router.asPath !== "/") {
      router.push("/");
    }
  }, [router]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
