"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import CurrentUserContextProvider from "@/context/CurrentUserContextProvider";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

const authPages = ["/login", "/register", "/newpassword", "/forgotpassword"];

export default function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = authPages.includes(pathname);

  return (
    <CurrentUserContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <NextTopLoader color="#53b700" showSpinner={false} />
          {!isAuthPage ? (
            <>
              <AppSidebar />
              <SidebarInset>
                <Navbar />
                {children}
              </SidebarInset>
            </>
          ) : (
            children
          )}
        </SidebarProvider>
      </ThemeProvider>
    </CurrentUserContextProvider>
  );
}
