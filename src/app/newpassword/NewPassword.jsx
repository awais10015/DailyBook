"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, Key, Eye, EyeOff } from "lucide-react"; 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

const NewPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  return (
    <div
      className="absolute h-screen w-full flex items-center justify-center 
                     bg-[url('/login.svg')] bg-cover bg-center"
    >
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      
      <div className="absolute bottom-0 z-10 flex w-full items-center justify-evenly gap-6 pt-6 px-6">
        
        {/* Left side (Image/Branding) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Image src={"/Frame.svg"} height={400} width={400} alt="logo" />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 h-[500px] max-w-md bg-white p-8 shadow-lg rounded-t-2xl"
        >
          <form className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400 text-sm font-medium">
                LET&apos;S GET YOU STARTED
              </p>
              <h1 className="text-black text-2xl font-semibold mt-1">
                Enter Your New Password!
              </h1>
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="password"
                className="text-black font-medium text-sm"
              >
                Password
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 rounded-md border-gray-300 focus:border-[#53b700] focus:ring-2 focus:ring-[#53b700]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-black text-sm font-light"
            >
              Enter Your New Password
            </motion.p>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
                type="submit"
                className="mt-4 w-full text-white rounded-sm bg-[#53b700] hover:bg-[#469900]"
              >
                Change Password
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default NewPassword;
