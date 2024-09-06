import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex gap-4  flex-col items-center justify-between md:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg"
            prefetch={false}
          >
            <CrossIcon className="w-6 h-6" />
            <h1>Dr. Abhay Yadav, MS</h1>
          </Link>
          <nav className="flex gap-4 items-center">
            <Link href="/" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="blogs" className="hover:underline" prefetch={false}>
              Blogs
            </Link>
          </nav>
          <Button variant="secondary" size="sm">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

function CrossIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  );
}
