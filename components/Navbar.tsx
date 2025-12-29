import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex justify-evenly gap-x-4 border">
      <Link href="/" className="text-blue-500 underline">
        Home
      </Link>
      <Link href="/about" className="text-blue-500 underline">
        About
      </Link>
      <Link href="/contact" className="text-blue-500 underline">
        Contact
      </Link>
      <Link href="/info" className="text-blue-500 underline">
        Info
      </Link>
    </nav>
  );
};

export default Navbar;
