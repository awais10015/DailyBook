"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const authInputClass =
  "h-11 rounded-lg border-zinc-200 bg-white pl-10 text-zinc-900 shadow-none focus-visible:border-[var(--brand)] focus-visible:ring-[var(--brand)]/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

export const authButtonClass =
  "h-11 w-full rounded-lg bg-[var(--brand)] text-white shadow-sm hover:bg-[var(--brand-hover)] focus-visible:ring-[var(--brand)]/40";

export const authLinkClass =
  "font-medium text-[var(--brand)] transition-colors hover:text-[var(--brand-hover)] hover:underline";

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-svh w-full bg-[url('/login.svg')] bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-[#1a3d0a]/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center gap-8 px-4 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full max-w-lg flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="flex items-center gap-4">
            <span
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)]/20 ring-1 ring-[var(--brand)]/50 shadow-lg shadow-black/20"
              aria-hidden
            >
              <BookOpen className="size-8 text-[var(--brand)]" strokeWidth={2} />
            </span>
            <div className="text-left">
              <p className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                DailyBook
              </p>
              <p className="text-sm font-medium text-[var(--brand)] lg:text-base">
                Bookkeeping
              </p>
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Your business, your control
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
            Sign in to manage invoices, customers, and suppliers — secure
            payments made simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div
            className="rounded-2xl border border-white/20 bg-white p-8 shadow-2xl shadow-black/20 dark:border-zinc-800 dark:bg-zinc-950"
          >
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
