"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
  // Add more links as needed
];
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-100 px-6 py-4">
      <section className="flex flex-wrap items-center justify-between mx-auto">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <section className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </section>
        <section className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8" id="navbar">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="py-2 px-4 text-white hover:text-gray-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
      {navbarOpen && <MenuOverlay links={navLinks}/>}
    </nav>
  );
}
