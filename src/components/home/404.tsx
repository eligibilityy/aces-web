"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PusheenGhost from "@/components/assets/pusheen ghost 1-Screenshot 1343014.png"; // Update the path to the actual image path
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Loader2 } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-white dark:bg-black min-h-[80vh] flex flex-col md:flex-row justify-center items-center">
      <motion.div
        className="w-56 h-56 md:w-64 md:h-64 mb-10 md:mb-0"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src={PusheenGhost}
          alt="Pusheen Ghost"
          layout="cover"
          objectFit="cover"
        />
      </motion.div>
      <div className="text-left ml-8">
        <h1 className="text-7xl font-bold tracking-tighter mb-2">Ooooops.</h1>
        <p className="text-black/70 dark:text-white/70 flex items-center gap-2">
          <Loader2 className="animate-spin"/>
          Can't find the page you're looking for.
        </p>
        <Link href="/" passHref>
          <Button variant="outline" className="mt-4 flex items-center space-x-2">
            <span>Go Back</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
