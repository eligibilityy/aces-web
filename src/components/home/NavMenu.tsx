"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import { NavButton } from "./NavButton";

import { AnimatePresence, motion } from "framer-motion";

import { NavItems } from "../utils/NavItems";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative block sm:hidden" ref={menuRef}>
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="absolute -top-2 -right-2 w-64 min-h-64 rounded-lg border border-white/20 shadow-sm p-8 z-20 flex flex-col origin-top-right bg-white dark:bg-black"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold mb-6">ACES</h1>
            </div>
            <ul className="flex flex-col gap-2 flex-1 justify-center">
              {NavItems.map(({ title, href, target, icon }) => (
                <li key={title}>
                  <Link
                    href={href}
                    target={target}
                    className="hover:text-sky-300/90 text-lg transition-colors flex items-center gap-2"
                  >
                    <span className="text-xl">{icon}</span>
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-8">Hi : )</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
