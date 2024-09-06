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
  metadataBase: new URL("https://www.abhayspine.com/"),

  title: {
    default: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
    template: "%s | Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
  },
  description:
    "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
  keywords: [
    "Senior Consultant Orthopaedic Surgeon",
    "Orthopaedic Spine Surgeon",
    "Senior Spine Specialist",
    "Best Orthopaedic Surgeon",
    "Top Orthopaedic Surgeon in kathmandu, Nepal",
  ],
  openGraph: {
    title: "Dr. Abhay Yadav, MS - Orthopaedic & Spine Surgeon",
    description:
      "Dr. Abhay Yadav, MS - Senior Consultant Orthopaedic & Spine Surgeon with expertise in Minimally Invasive Spine Surgery, Arthroplasty, Trauma Care. Serving Kathmandu and Nepal.",
    url: "https://www.abhayspine.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
