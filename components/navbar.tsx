"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/food-trucks", label: "Food Trucks" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "#subscribe", label: "Subscribe" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl font-bold text-amber">
          What&apos;s Up Tyler
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-amber transition">
              {l.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? "X" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2 text-sm font-medium text-gray-700 hover:text-amber" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
