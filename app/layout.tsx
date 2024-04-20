//@ts-nocheck

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import SessionProvider from "@/providers/session-provider";

import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akompta",
  description: "Le futur de la comptabilite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: RootLayoutProps;
}>) {
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
        <head />
        <body>
          {/* <SessionProvider session={session}> */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* </SessionProvider> */}
        </body>
      </html>
    </>
  );
}
