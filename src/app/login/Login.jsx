"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Mail, Key, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CurrentUserContext from "@/context/CurrentUserContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(CurrentUserContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    email: "test@test.com",
    password: "asdf",
    name: "Tester",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      setCurrentLoggedInUser(user);
      alert("successfull");
      router.push("/dashboard");
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <div
      className="absolute h-screen w-full flex items-center justify-center 
                 bg-[url('/login.svg')] bg-cover bg-center"
    >
   
      <div className="absolute inset-0 bg-black/30" />

   
      <div className="absolute bottom-0 z-10 flex w-full items-center justify-evenly gap-6 pt-6 px-6">
   
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <Image src={"/Frame.svg"} height={400} width={400} alt="logo" />
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 h-[500px] max-w-md bg-white p-8 shadow-lg rounded-t-2xl"
        >
          <form className="flex flex-col gap-6 text-black" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-400 text-sm font-medium">
                LET&apos;S GET YOU STARTED
              </p>
              <h1 className="text-black text-2xl font-semibold mt-1">
                Login to your Account
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="text-black font-medium text-sm">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 rounded-md border-gray-300 focus:border-[#53b700] focus:ring-2 focus:ring-[#53b700]"
                />
              </div>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
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
                  onChange={(e) => setpassword(e.target.value)}
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

      
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="w-full flex items-end justify-end"
            >
              <Link
                href={"/forgotpassword"}
                className="text-[#53b700] underline text-sm font-medium"
              >
                Forgot Password?
              </Link>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                type="submit"
                className="mt-4 w-full text-white rounded-sm bg-[#53b700] hover:bg-[#469900]"
              >
                Login
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
