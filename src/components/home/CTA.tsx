"use client";

import { useRef } from "react";

import Image from "next/image";

import LuckyBlock from "@/components/assets/luckyblock.png";
import Capybara from "@/components/assets/cappy.png";
import { motion, useScroll, useTransform } from "framer-motion";
export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-300, 500]);

  return (
    <div className="py-[72px] sm:py-24 overflow-clip bg-white dark:bg-black">
      <div className="container max-w-xl relative mx-auto">
        <motion.div style={{ translateY }}>
          <Image
            src={Capybara}
            height="400"
            width="400"
            className="absolute -right-[24rem] bottom-56 hidden sm:inline"
            alt=""
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={LuckyBlock}
            height="300"
            width="300"
            className="absolute -left-80 bottom-48 hidden sm:inline"
            alt=""
          />
        </motion.div>
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Want In?
            <br />
            <span className="bg-gradient-to-b from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Let&apos;s Go!
            </span>
          </h2>
          <p className="text-base sm:text-xl text-black/70 dark:text-white/70 mt-5 max-w-xl mx-auto">
            Just find our booth and have fun; be it joining our mini tournaments, playing on the Nintendo Switch, the consoles, or just to chill around! See you there!
          </p>
        </div>
      </div>
    </div>
  );
};
