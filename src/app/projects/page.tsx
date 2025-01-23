import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";

import TheBestPictureEver from "@/components/assets/thebestpicturetoeverexist.jpg";

const projects = [
  {
    author: "ACES",
    title: "Minecraft",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente.",
    iconPath: TheBestPictureEver,
  },
];

export const metadata = {
  title: "Projects",
  opengraph: {
    url: "https://aces-web.vercel.app/projects",
  },
};

export default async function Projects() {
  return (
    <>
      <Nav />
      <div className="mb-20 mt-12 container lg:max-w-6xl sm:max-w-3xl max-w-md">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-start">
          Projects
        </h1>
        <p className="dark:text-white/70 text-black/70 text-start">
          A collection and photo dump of projects and other activities by ACES
        </p>
        <Separator className="my-4" />
        <div className="my-8 -space-y-3">
          <h2 className="text-3xl font-bold mb-4 text-start">Repos</h2>
          <p className="dark:text-white/70 text-black/70 text-start">
            Projects by ACES; Games, Websites, Applications, etc.
          </p>
        </div>
        {/* Masonry layout */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          style={{
            columnGap: "20px", // Horizontal spacing between columns
          }}
        >
          {/* Show skeleton loader if data is empty */}
          {projects.map(({ author, title, description, iconPath }) => (
            <div
              key={title}
              className="mb-5 break-inside-avoid" // Avoid breaking cards in masonry layout
            >
              <Card className="group w-full">
                <CardHeader>
                  <div className="flex justify-start items-center mb-2 gap-4">
                    <Avatar>
                      <AvatarImage src={iconPath.src} alt="Icon" />
                      <AvatarFallback>{author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-md font-semibold">
                      {author}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-start text-start space-y-4">
                  <h3 className="font-semibold tracking-tight">{title}</h3>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {description}
                  </p>
                  {/* Display languages */}
                  <div className="flex flex-wrap gap-2"></div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link
                    href={"https://www.youtube.com/watch?v=1KYfstXHXa0"}
                    target="_blank"
                  >
                    <Button className="capitalize" variant="secondary">
                      View Game <ArrowUpRight weight="fill" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-8 -space-y-3">
          <h2 className="text-3xl font-bold mb-4 text-start">Gallery</h2>
          <p className="dark:text-white/70 text-black/70">
            Photodump of projects by ACES
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          <p>Check back soon! :)</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
