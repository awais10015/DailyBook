import React from 'react'
import Login from './Login'
const page = () => {
  return (
    <>
    <Login/>
    </>
  )
}

export default page




// "use client";
// import React, { useState } from "react";
// import { LogIn, Mail, KeyRound, Eye, EyeOff } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";

// const Login = () => {
//     const [showPassword, setshowPassword] = useState(false)
//   return (
//     <>
//       <div className="z-100 h-screen w-full flex items-center justify-center">
//         <div className="p-10 h-120 w-100 text-center rounded-3xl flex flex-col items-center backdrop-blur-md bg-gradient-to-b from-[#C3EEFB]/20 to-white/2010 border border-white/20 shadow-lg gap-4">
//           <LogIn className="size-10" />
//           <h1 className="font-medium text-2xl">Welcome Back</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

//           <form action="" className="w-full flex flex-col gap-5 mt-5">
//             {/* Email */}
//             <div className="relative w-full">
//               <Mail
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={18}
//               />
//               <Input type="email" placeholder="Email" className="pl-10" />
//             </div>

//             {/* Password */}

//             <div className="relative w-full">
//               <KeyRound
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={18}
//               />
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="pr-10 pl-10 "
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* checkbox */}
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" className="cursor-pointer" />
//               <label
//                 htmlFor="terms"
//                 className="cursor-pointer text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Remember Me!
//               </label>
//             </div>
//             {/* Submit Button */}
//             <div className="w-full flex flex-wrap items-center gap-2 md:flex-row">
//               <Button type="submit" className="w-full cursor-pointer">
//                 Get Started
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
