import React from "react";

import { Squeeze as Hamburger } from "hamburger-react";

interface NavMenuToggleProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

export const NavButton: React.FC<NavMenuToggleProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-black stroke-2 z-50"
    >
      <Hamburger toggled={menuOpen} direction="right" size={28} />
    </div>
  );
};
