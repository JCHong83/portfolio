import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Visionary Digital | LCD, LED & Development",
  description: "Boutique agency for high-end displays and startup building.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased pt-20" >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
