import type { Metadata } from "next";
import "./globals.css";

import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
  description:
    "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
