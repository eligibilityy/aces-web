import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

import { ThemeProvider } from "next-themes";

const GeistFont = Geist({ subsets: ["latin"] });

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
        className={twMerge(GeistFont.className, "dark:bg-black bg-white")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
