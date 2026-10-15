import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DailyBook",
    template: "%s | DailyBook",
  },
  description:
    "Manage invoices, customers, and suppliers — secure bookkeeping made simple.",
  applicationName: "DailyBook",
  keywords: [
    "bookkeeping",
    "invoices",
    "customers",
    "suppliers",
    "payments",
    "dashboard",
  ],
  authors: [{ name: "DailyBook" }],
  creator: "DailyBook",
  openGraph: {
    title: "DailyBook",
    description:
      "Manage invoices, customers, and suppliers — secure bookkeeping made simple.",
    siteName: "DailyBook",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "DailyBook",
    description:
      "Manage invoices, customers, and suppliers — secure bookkeeping made simple.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#53b700" },
    { media: "(prefers-color-scheme: dark)", color: "#1a3d0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
