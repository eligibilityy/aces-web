import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { GetData } from "@/lib/GetData";
import { Repository } from "@/lib/types";
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

export default async function Projects() {
  const data = await GetData();

  return (
    <>
      <Nav />
      <div className="mb-20 mt-12 container lg:max-w-6xl sm:max-w-3xl max-w-md">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-start">Projects</h1>
        <p className="dark:text-white/70 text-black/70 text-start">
                A collection and photo dump of projects and other activities by
                ACES
        </p>
        <Separator className="my-4"/>
        <div className="my-8 -space-y-3">
        <h2 className="text-3xl font-bold mb-4 text-start">Repos</h2>
        <p className="dark:text-white/70 text-black/70 text-start">
          Repositories in the {' '}
          {/* <Link href="https://github.com/DLSLACES" target="_blank" className="text-neutral-300 hover:underline underline-offset-2">
            DLSLACES
          </Link>{' '} */}
          {' '}
          organization
        </p>
        </div>
        {/* Masonry layout */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          style={{
            columnGap: "20px", // Horizontal spacing between columns
          }}
        >
          {data.map((repo: Repository) => (
            <div
              key={repo.id}
              className="mb-5 break-inside-avoid" // Avoid breaking cards in masonry layout
            >
              <Card className="group w-full">
                <CardHeader>
                  <div className="flex justify-start items-center mb-4 gap-4">
                    <Avatar>
                      <AvatarImage src={repo.owner.avatar_url} alt="avatar" />
                      <AvatarFallback>
                        {repo.owner.login.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-md font-semibold">
                      {repo.owner.login}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-start text-start space-y-4">
                  <h3 className="font-semibold tracking-tight">{repo.name}</h3>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {repo.description}
                  </p>
                  {/* Display languages */}
                  <div className="flex flex-wrap gap-2">
                    {repo.languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="bg-gray-100 dark:bg-neutral-800/70 text-sm px-2 py-1 rounded"
                      >
                        {lang.name} ({lang.lines_of_code} LOC)
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-4 flex justify-end">
                  <Link
                  href={`https://github.com/${repo.owner.login}/${repo.name}/commits`}
                  target="_blank"
                  >
                  <Button className="capitalize" variant="secondary">
                    view commits <ArrowUpRight weight="fill" />
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
