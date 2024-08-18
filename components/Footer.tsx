import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} abhayspine.com All rights reserved.
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
