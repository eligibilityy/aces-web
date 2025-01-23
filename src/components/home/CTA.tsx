"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

import { z } from "zod";
import Image from "next/image";

import LuckyBlock from "@/components/assets/luckyblock.png";
import Capybara from "@/components/assets/cappy.png";
import { motion, useScroll, useTransform } from "framer-motion";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Email must be a DLSL email address." })
    .refine((email) => email.endsWith("@dlsl.edu.ph"), {
      message: "Email must be a DLSL email address.",
    }),
});

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-300, 500]);

  const [notification, setNotification] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setNotification("Form submitted successfully!");
  }

  return (
    <div className="py-[72px] sm:py-24 overflow-clip bg-white dark:bg-black">
      <div className="container max-w-xl relative mx-auto">
        <motion.div style={{ translateY }}>
          <Image
            src={Capybara}
            height="400"
            width="400"
            className="absolute -right-[24rem] bottom-44 hidden sm:inline"
            alt=""
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={LuckyBlock}
            height="300"
            width="300"
            className="absolute -left-80 bottom-28 hidden sm:inline"
            alt=""
          />
        </motion.div>
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Want In?
            <br />
            <span className="bg-gradient-to-b from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Let&apos;s Go!
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mt-5 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo atque accusantium totam mollitia quam labore sunt maxime
            est vero!
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 max-w-md mx-auto items-center"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="..."
                      {...field}
                      className="h-12 w-full bg-stone-50/10 rounded-lg text-black/70 font-medium"
                    />
                  </FormControl>
                  <FormDescription className="text-black/30 dark:text-white/30">
                    Enter your DLSL email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="before:ease relative w-full h-11 mt-5 overflow-hidden border border-sky-400 bg-sky-400 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-30 before:duration-700 hover:before:-translate-x-[30rem] rounded-lg inline-flex items-center justify-center gap-2"
            >
              Apply
              <PaperPlaneTilt size={18} weight="fill" />
            </button>
          </form>
        </Form>
        {notification && (
          <div className="mt-5 text-center text-green-500">{notification}</div>
        )}
      </div>
    </div>
  );
};
