"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-6">
      <Link href="/" className="font-semibold hover:underline">
        Home
      </Link>
      <Link href="/journey" className="font-semibold hover:underline">
        Journey
      </Link>
      <Link href="/dashboard" className="font-semibold hover:underline">
        Dashboard
      </Link>
    </nav>
  );
}
