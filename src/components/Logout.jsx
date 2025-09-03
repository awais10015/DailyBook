"use client";
import React from "react";
import { deleteCookie } from "cookies-next";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");

    localStorage.removeItem("token");

    router.push("/login");
  };
  return (
    <Button
      onClick={handleLogout}
      className="cursor-pointer bg-[#53b700] hover:bg-[#53b700] text-white rounded-sm"
    >
      Logout
    </Button>
  );
};

export default Logout;
