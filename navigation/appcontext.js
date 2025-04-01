import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const login = (userData) => {
    setUserInfo(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
