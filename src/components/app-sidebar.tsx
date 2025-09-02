"use client"

import { ChartColumnStacked, User , UserStar , ReceiptText, Calculator} from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartColumnStacked,
  },
  {
    title: "Customer",
    url: "/customer",
    icon: User,
  },
  {
    title: "Supplier",
    url: "/supplier",
    icon: UserStar,
  },
  {
    title: "Invoice",
    url: "/invoice",
    icon: ReceiptText,
  },
  {
    title: "Daily Expense",
    url: "/dailyexpense",
    icon: Calculator,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen shadow-md">
      {/* Logo/Header */}
      <SidebarHeader className="px-6 h-[70px] border-b bg-[#53b700]/10  border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          <Image src={"/logo.svg"} height={70} width={170} alt="logo" />
          
        </div>
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent className="">
        <SidebarMenu className="">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className={`flex items-center h-[60px] pl-5 text-sm rounded-none font-medium transition-all ${
                      isActive
                        ? "bg-[#53b700] hover:bg-[#53b700] text-white shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
