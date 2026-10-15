"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import UserNav from "@/components/UserNav";
import { ModeToggle } from "@/components/ModeToggle";

const PAGE_TITLES = {
  dashboard: "Dashboard",
  customer: "Customers",
  supplier: "Suppliers",
  invoice: "Invoices",
};

function getPageTitle(pathname) {
  if (pathname === "/") return "Home";
  const segment = pathname.replace(/^\//, "").split("/")[0];
  return PAGE_TITLES[segment] || segment.replace(/\b\w/g, (c) => c.toUpperCase());
}

const Navbar = () => {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const isDashboardHome = pathname === "/dashboard";

  return (
    <header
      className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6"
    >
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <nav aria-label="Breadcrumb" className="flex min-w-0 flex-1 items-center gap-1.5 text-sm">
        <Link
          href="/dashboard"
          className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
        {isDashboardHome ? (
          <span className="truncate font-medium text-foreground">{pageTitle}</span>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="hidden shrink-0 text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Dashboard
            </Link>
            <ChevronRight
              className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground sm:inline"
              aria-hidden
            />
            <span className="truncate font-medium text-foreground">{pageTitle}</span>
          </>
        )}
      </nav>
      <div className="ml-auto flex items-center gap-1">
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
};

export default Navbar;
