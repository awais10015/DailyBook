"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserCog,
  FileText,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    url: "/customer",
    icon: Users,
  },
  {
    title: "Suppliers",
    url: "/supplier",
    icon: UserCog,
  },
  {
    title: "Invoices",
    url: "/invoice",
    icon: FileText,
  },
];

const activeNavClass =
  "bg-[var(--brand)]/12 text-[var(--brand)] hover:bg-[var(--brand)]/15 hover:text-[var(--brand)] data-[active=true]:bg-[var(--brand)]/12 data-[active=true]:text-[var(--brand)]";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="border-b border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="DailyBook">
              <Link href="/dashboard">
                <span
                  className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand)]"
                >
                  <BookOpen className="size-4" aria-hidden />
                </span>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">DailyBook</span>
                  <span className="truncate text-xs text-muted-foreground">
                    Bookkeeping
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="group-data-[collapsible=icon]:overflow-hidden">
        <SidebarGroup className="group-data-[collapsible=icon]:p-1">
          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:items-center">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        isActive ? activeNavClass : "text-muted-foreground"
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border group-data-[collapsible=icon]:hidden">
        <p className="px-2 py-2 text-xs text-muted-foreground">
          DailyBook v0.1
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
