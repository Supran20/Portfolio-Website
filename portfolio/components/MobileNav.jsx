"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-emerald-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-bold">
              Supran<span className="text-emerald-400">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-emerald-400 border-b-2 border-emerald-400"
              } text-xl capitalize hover:text-emerald-400 transition`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
