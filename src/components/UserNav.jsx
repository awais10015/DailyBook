"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ChevronsUpDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CurrentUserContext from "@/context/CurrentUserContext";
import { clearAuthSession } from "@/lib/logout";

export default function UserNav() {
  const router = useRouter();
  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(CurrentUserContext);

  const name = currentLoggedInUser?.name || "User";
  const email = currentLoggedInUser?.email || "user@dailybook.com";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    clearAuthSession();
    setCurrentLoggedInUser({});
    router.push("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-9 gap-2 px-2 data-[state=open]:bg-muted"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)]/15 text-xs font-semibold text-[var(--brand)]"
            aria-hidden
          >
            {initials}
          </span>
          <span className="hidden max-w-[120px] truncate text-sm font-medium md:inline">
            {name}
          </span>
          <ChevronsUpDown className="hidden h-4 w-4 text-muted-foreground md:inline" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
