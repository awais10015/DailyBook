"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import CurrentUserContext from "@/context/CurrentUserContext";

const Page = () => {
  const router = useRouter();
  const { currentLoggedInUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!currentLoggedInUser || Object.keys(currentLoggedInUser).length === 0) {
      router.push("/login");
    } else {
      router.push("/dashboard")
    }
  }, [currentLoggedInUser]);

  if (!currentLoggedInUser) {
    
    return null;
  }

  return <div>Welcome, {currentLoggedInUser?.name}!</div>;
};

export default Page;
