"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";

export default function ThemeBasedLoader() {
  const { theme } = useTheme();
  const [loaderColor, setLoaderColor] = useState("black");

  useEffect(() => {
    if (theme === "dark") {
      setLoaderColor("white");
    } else if (theme === "light") {
      setLoaderColor("black");
    }
  }, [theme]);

  return (
    <NextTopLoader
      color={loaderColor}
      showAtBottom={true}
      crawl={true}
    />
  );
}
