import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavMenu } from "./NavMenu";

import AcesLogo from "@/components/assets/ACES_LOGO_RED_1.png";
import { ThemeToggle } from "./ThemeToggle";

import { NavItems } from "../utils/NavItems";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 z-30 sticky top-0 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black transition-colors">
      <div>
        <Image src={AcesLogo} alt="ACES Logo" width="50" height="50" />
      </div>
      <div className="flex flex-row items-center gap-6">
        <ul className="hidden sm:flex gap-8 font-bold items-center">
          {NavItems.map(({ title, href, target, icon }) => (
            <li key={title}>
              <Link
                target={target}
                href={href}
                passHref
                className="hover:underline underline-offset-2 text-lg transition-colors flex items-center gap-2"
              >
                <span className="text-xl">{icon}</span>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <NavMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
};
