import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

import { ThemeProvider } from "next-themes";
import ThemeBasedLoader from "@/components/home/ThemeLoader"; // Import client-side component

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DLSL - ACES Club",
  description: "Lorem Ipsum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          JetBrains.className,
          "dark:bg-black bg-white scrollbar",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeBasedLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
