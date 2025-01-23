import {
  GameController,
} from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";

import GameDevImage from "@/components/assets/gamedev.jpg";
import DevImage from "@/components/assets/prog.jpg";
import WebDevImage from "@/components/assets/webdev.jpg";

const skills = [
  {
    title: "Game Development",
    description:
      "Crafting immersive worlds and interactive gameplay experiences.",
    image: GameDevImage,
  },
  {
    title: "Web Development",
    description: "Designing dynamic websites and powerful web applications.",
    image: WebDevImage,
  },
  {
    title: "Computer Programming",
    description:
      "Building efficient solutions and innovative software through code.",
    image: DevImage,
  },
];

export const Club = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tight">
          Our Superpowers ⚡
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-lg text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non,
            repellat laborum officia commodi adipisci?
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {skills.map(({ title, description, image }) => (
            <div
              key={title}
              className="relative rounded-xl overflow-hidden border border-white/30 text-center sm:flex-1 "
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-20"
              />
              {/* Content */}
              <div className="relative z-10 px-5 py-10 items-center justify-center">
                <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg mx-auto">
                  <GameController size={30} />
                </div>
                <h3 className="mt-6 font-bold text-xl">{title}</h3>
                <p className="mt-2 text-white/80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
