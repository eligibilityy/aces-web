"use client";

import Image from "next/image";
import GroupImage from "@/components/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Showcase = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="py-[72px] sm:py-24 overflow-clip bg-white dark:bg-black">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          ACES Showcase 🌟
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-center text-black/70 dark:text-white/70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ratione repudiandae placeat deserunt voluptatem neque.
          </p>
        </div>
        <div className="block sm:hidden text-center text-xs text-black/40 dark:text-white/40 mt-5">
          Swipe to see all images
        </div>
        <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="">
                <div className="p-1">
                  <Card className="bg-transparent border-none">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image src={GroupImage} alt="" className="rounded-lg" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-black/70 dark:text-white/70">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
};
