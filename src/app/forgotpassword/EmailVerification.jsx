"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const EmailVerification = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute h-screen w-full flex items-center justify-center 
                 bg-[url('/login.svg')] bg-cover bg-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black"
      />

      <div className="absolute bottom-0 z-10 flex flex-col md:flex-col lg:flex-row w-full items-center justify-evenly gap-6 pt-6 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <motion.div className="relative h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/login/frame.svg"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 h-[500px] max-w-md bg-white p-8 shadow-lg rounded-t-2xl"
        >
          <form className="flex flex-col gap-6">
            <div>
              <p className="text-gray-400 text-sm font-medium">
                LET&apos;S GET YOU STARTED
              </p>
              <h1 className="text-black text-2xl font-semibold mt-1">
                Forgot Password?
              </h1>
            </div>

            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-black font-medium text-sm">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 rounded-md border-gray-300 focus:border-[#53b700] focus:ring-2 focus:ring-[#53b700]"
                />
              </div>
            </div>

            <p className="text-black text-sm font-light">
              A password reset link will be shared to your email address
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/newpassword");
                }}
                type="submit"
                className="mt-4 w-full text-white rounded-sm bg-[#53b700] hover:bg-[#469900]"
              >
                Send Link
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmailVerification;
