"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav role="navigation" aria-label="Main navigation" className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            aria-current={isActive ? "page" : undefined}
            className={`${
              isActive && "text-white border-b-2 border-accent font-bold"
            } capitalize font-medium hover:text-white transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
