"use client";

import * as React from "react";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark"];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme ?? "system");
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun
        weight="fill"
        size={30}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        weight="fill"
        size={30}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
