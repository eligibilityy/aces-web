"use client";

import Image from "next/image";
import ComputerImage from "@/components/assets/computer-3d.png";
import BobaImage from "@/components/assets/boba-3d.png";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="py-[72px] sm:py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#c270fb] bg-[radial-gradient(closest-side,#000_82%,#8a3ac1)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div> */}
      <div className="container relative">
        {/* This is bare-bones. We can add CTA for people who want to apply/check out what we do and whatnot if you guys wnat */}
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center">
              Hack. Tech.
              <br /> Code.{" "}
              <span className="text-[#ffd8a7] font-bold inline-block">
                ACES.
              </span>
              <motion.div
                className="absolute top-20 -right-[275px] hidden sm:inline"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image
                  src={ComputerImage}
                  height="400"
                  width="400"
                  className="max-w-none"
                  alt=""
                  draggable="false"
                />
              </motion.div>
              <motion.div
                className="absolute -left-56 top-[20px] hidden sm:inline"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image
                  src={BobaImage}
                  height="250"
                  width="250"
                  className="max-w-none"
                  alt=""
                  draggable="false"
                />
              </motion.div>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="py-4 text-center text-xl max-w-md z-2 text-black/70 dark:text-white/70">
            Come over to MM Building for our Gaming Lounge on Foundation Week!
          </span>
        </div>
        <div className="flex justify-center mt-8">
            <Link
            href="/projects"
            className="bg-[linear-gradient(to_right,rgb(255,_216,_167),rgb(246,_182,_182),rgb(227,_150,_204),rgb(209,_115,_227),rgb(171,_84,_231))] text-white py-3 px-5 rounded-lg inline-flex items-center gap-4 transition-all transform hover:scale-105 font-medium hover:bg-[linear-gradient(to_right,rgb(255,_200,_150),rgb(230,_160,_160),rgb(210,_130,_190),rgb(190,_100,_210),rgb(150,_70,_210))]"
            >
            Projects
            <ArrowRight weight="fill" size={18} />
            </Link>
        </div>
      </div>
    </div>
  );
};
