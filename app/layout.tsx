import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
  metadataBase: new URL("https://www.abhayspine.com/"),

  title: {
    default: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
    template: "%s | Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
  },
  description:
    "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care, Kathmandu.",
  openGraph: {
    title: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
    description:
      "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
    url: "https://www.abhayspine.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Dr-Abhay-Yadav-2.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "5icsdY7Q1jrz5Im8mwfOwi5-3n7FV1q8iCoG83eLn7s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-LV0HKWZ90B" />
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
