import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" px-5 py-3 border-b-2 border-gray-500 flex justify-between items-center bg-black text-white">
      <Link href="/" className="text-lg font-semibold">
        Dev-Story
      </Link>

      <nav className="space-x-8">
        <Link href="/about">About</Link>
             <Link href='/stories'>Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        
      </nav>
    </header>
  );
};

export default Header;
