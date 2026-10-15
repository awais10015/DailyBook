"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import CurrentUserContext from "@/context/CurrentUserContext";
import { clearAuthSession } from "@/lib/logout";

const Logout = () => {
  const router = useRouter();
  const { setCurrentLoggedInUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    clearAuthSession();
    setCurrentLoggedInUser({});
    router.push("/login");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand)]/10"
    >
      Logout
    </Button>
  );
};

export default Logout;
