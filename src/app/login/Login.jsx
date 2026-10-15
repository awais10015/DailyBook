"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { Mail, Key, Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CurrentUserContext from "@/context/CurrentUserContext";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
import AuthLayout, {
  authButtonClass,
  authInputClass,
  authLinkClass,
} from "@/components/auth/AuthLayout";
import AuthCardHeader from "@/components/auth/AuthCardHeader";

const DEMO_USER = {
  email: "test@test.com",
  password: "asdf",
  name: "Tester",
};

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { setCurrentLoggedInUser } = useContext(CurrentUserContext);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [password, setPassword] = useState(DEMO_USER.password);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
      setError("Invalid email or password. Try test@test.com / asdf.");
      return;
    }

    setIsLoading(true);
    setCurrentLoggedInUser(DEMO_USER);
    localStorage.setItem("token", "my-secret-token");
    setCookie("token", "my-secret-token");
    await new Promise((resolve) => setTimeout(resolve, 400));
    router.push("/dashboard");
  };

  return (
    <AuthLayout>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        aria-busy={isLoading}
      >
        <AuthCardHeader
          eyebrow="Welcome back"
          title="Log in to your account"
          description="Enter your credentials to access your dashboard."
        />

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email
          </Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
              aria-hidden
            />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={authInputClass}
              aria-invalid={!!error}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </Label>
          <div className="relative">
            <Key
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
              aria-hidden
            />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`${authInputClass} pr-10`}
              aria-invalid={!!error}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(v) => setRememberMe(v === true)}
            />
            <Label
              htmlFor="remember"
              className="cursor-pointer text-sm font-normal text-zinc-600 dark:text-zinc-400"
            >
              Remember me
            </Label>
          </div>
          <Link href="/forgotpassword" className={`text-sm ${authLinkClass}`}>
            Forgot password?
          </Link>
        </div>

        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
            {error}
          </p>
        ) : null}

        <Button
          type="submit"
          className={authButtonClass}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            "Log in"
          )}
        </Button>

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className={authLinkClass}>
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
