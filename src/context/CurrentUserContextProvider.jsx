"use client"
import React, { useState } from "react";
import CurrentUserContext from "./CurrentUserContext";


const CurrentUserContextProvider = ({ children }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});

  return (
    <CurrentUserContext.Provider value={{ currentLoggedInUser, setCurrentLoggedInUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;