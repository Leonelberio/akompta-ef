import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/components/session-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Akompta",
    description: "Le futur de la comptabilite",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionWrapper>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </SessionWrapper>
    );
}
