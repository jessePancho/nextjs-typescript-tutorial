import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/about" className="text-blue-500 underline">
        About
      </Link>
      <Link href="/info" className="text-blue-500 underline">
        Info
      </Link>
    </div>
  );
};

export default ContactPage;
