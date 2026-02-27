"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "page1", href: "/pages/page1" },
    { name: "page2", href: "/pages/page2" },
    { name: "page3", href: "/pages/page3" },
    { name: "page4", href: "/pages/page4" },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-6 text-lg md:text-xl font-serif mt-6">
     {links
     .filter((link) => link.href !== pathname)
     .map((link) => (
       <Link
         key={link.href} 
         href={link.href}
         className="hover:text-yellow-300 transition"
       >
         {link.name}
       </Link>
     ))}
    </nav>
  );
}