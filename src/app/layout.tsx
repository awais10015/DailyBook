"use client";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import CurrentUserContextProvider from "@/context/CurrentUserContextProvider";
import { usePathname } from "next/navigation";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const authPages = [
    "/login",
    "/register",
    "/newpassword",
    "/forgotpassword",
  ];
const isAuthPage = authPages.includes(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
