"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import AuthLayout, {
  authButtonClass,
  authInputClass,
  authLinkClass,
} from "@/components/auth/AuthLayout";
import AuthCardHeader from "@/components/auth/AuthCardHeader";

const EmailVerification = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/newpassword");
  };

  return (
    <AuthLayout>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>

        <AuthCardHeader
          eyebrow="Account recovery"
          title="Forgot your password?"
          description="We'll send a reset link to your email. (Demo: continues to set a new password.)"
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
            />
          </div>
        </div>

        <Button type="submit" className={authButtonClass}>
          Send reset link
        </Button>

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Remember your password?{" "}
          <Link href="/login" className={authLinkClass}>
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default EmailVerification;
