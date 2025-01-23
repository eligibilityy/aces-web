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
        className="opacity-100 transition-all dark:opacity-0"
      />
      <Moon
        weight="fill"
        className="absolute opacity-0 transition-all dark:opacity-100"
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
