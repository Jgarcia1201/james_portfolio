import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PortfolioApp from "@/components/PortfolioApp/PortfolioApp";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Garcia: Software Engineer",
  description: "James Garcia Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PortfolioApp />
      </body>
    </html>
  );
}