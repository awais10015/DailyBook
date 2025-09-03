"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import CurrentUserContext from "@/context/CurrentUserContext";
import Loader from "@/components/Loader";

const Page = () => {
  const router = useRouter();
  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(CurrentUserContext);

 
  const user = {
    email: "test@test.com",
    password: "asdf",
    name: "Tester",
  };


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (
      token &&
      (!currentLoggedInUser || Object.keys(currentLoggedInUser).length === 0)
    ) {
     
      setCurrentLoggedInUser(user);
    }
  }, []);

  useEffect(() => {
    if (!currentLoggedInUser || Object.keys(currentLoggedInUser).length === 0) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, [currentLoggedInUser, router]);

  if (!currentLoggedInUser || Object.keys(currentLoggedInUser).length === 0) {
    return (
      <div className="absolute top-[50%] left-[50%]">
        <Loader />
      </div>
    );
  }

  return null; 
};

export default Page;
