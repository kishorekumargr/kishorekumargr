"use client";

import { useState } from "react";
import Link from "next/link";
import Theme from "./Theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Theme />
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="nav-desktop">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/components">Components</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
