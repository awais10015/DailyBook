"use client"
import React, { useEffect, useState } from "react";
import CurrentUserContext from "./CurrentUserContext";
// import Loader from "@/components/Loader";

const CurrentUserContextProvider = ({ children }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});

  return (
    <CurrentUserContext.Provider value={{ currentLoggedInUser, setCurrentLoggedInUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;