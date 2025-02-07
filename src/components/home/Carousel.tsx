import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image1 from "@/components/assets/club-pics/423036469_377138821627346_2314919675562491573_n.jpg";
import Image2 from "@/components/assets/club-pics/438221261_1904207590033267_341456400036100234_n.jpg";
import Image3 from "@/components/assets/club-pics/438270912_457946760290156_8472544771494073914_n.jpg";
import Image4 from "@/components/assets/club-pics/438293807_1146151076420025_6400700328854826972_n.jpg";
import Image5 from "@/components/assets/club-pics/aces game lounge (booth).jpg";
import Image6 from "@/components/assets/club-pics/aces game lounge (booth)1.jpg";
import Image7 from "@/components/assets/club-pics/aces game lounge (booth)2.jpg";
import Image8 from "@/components/assets/club-pics/aces game lounge (booth)3.jpg";
import Image9 from "@/components/assets/club-pics/aces game lounge (booth)4.jpg";
import Image10 from "@/components/assets/club-pics/aces game lounge (booth)5.jpg";

const photos = [
  {
    photo: Image1,
  },
  {
    photo: Image2,
  },
  {
    photo: Image3,
  },
  {
    photo: Image4,
  },
  {
    photo: Image5,
  },
  {
    photo: Image6,
  },
  {
    photo: Image7,
  },
  {
    photo: Image8,
  },
  {
    photo: Image9,
  },
  {
    photo: Image10,
  },
];

const FeatureNine = () => {
  return (
    <div
      id="showcase"
      className="bg-white dark:bg-black py-[72px] sm:py-24  mx-auto"
    >
      <div className="container max-w-xl sm:max-w-6xl text-center">
        <h2 className="!mt-0 mb-4 sm:text-5xl text-4xl font-bold tracking-tight">
          ACES Showcase ✨
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-base sm:text-xl text-black/70 dark:text-white/70">
            A mini-gallery of our booth last academic year.
          </p>
        </div>
        <Carousel className="mt-6 sm:w-full w-[75%] mx-auto">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.photo}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeatureNine;
