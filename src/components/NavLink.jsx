import Link from "next/link";
import React from "react";

export default function NavLink({ href, title, className }) {
  return (
    <Link
      href={href}
      className={`"block text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" ${className}`}
    >
      {title}
    </Link>
  );
}
