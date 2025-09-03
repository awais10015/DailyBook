"use client";
import React, { useState } from "react";
import { Menu, Eye, EyeOff } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar"; 
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import Logout from "@/components/Logout"

const Navbar = () => {
  const [blurActive, setBlurActive] = useState(false);
  const pathname = usePathname();
  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .replace("/", "")
          .replace("-", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()); 

  return (
    <>
     
      <nav className="sticky top-0 z-20 w-full h-[70px] bg-[#53b700]/10 flex items-center px-4 justify-between">
       
        {!blurActive ? (
          <div className=" flex items-center justify-center">
            <SidebarTrigger className="size-8" />
          
            <div className="text-sm font-semibold text-gray-600 dark:text-white">
              Home {} {} / {} {} {pageName}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={() => setBlurActive(!blurActive)}
            className="p-2 cursor-pointer rounded-full hover:bg-white/20"
          >
            {blurActive ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          <ModeToggle />

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <Logout/>
        </div>
      </nav>

      {blurActive && (
        <div className="fixed inset-0 z-10 backdrop-blur-lg bg-black/20"></div>
      )}
    </>
  );
};

export default Navbar;
