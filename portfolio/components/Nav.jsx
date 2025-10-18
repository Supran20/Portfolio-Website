"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.name} className={`${link.path===pathname && "text-emerald-400 border-b-2 border-emerald-400"} capitalize text-lg font-medium hover:text-emerald-400 transition`}>
            <Link
              href={link.path}
              className="hover:text-emerald-400 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
