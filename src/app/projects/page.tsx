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

export default async function Projects() {
  const data = await GetData();

  return (
    <>
      <Nav />
      <div className="dark:bg-black bg-white sm:py-[72px] py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto text-center space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter">Projects</h1>
              <p className="dark:text-white/70 text-black/70">
                A collection and photo dump of projects and other activities by
                ACES
              </p>
            </div>
            <div className="lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 md:grid-cols-2 text-left">
              <div className="mb-20 mt-12">
                <h2 className="text-3xl font-bold mb-4 text-start">Repos</h2>
                <div className="grid gap-4 sm:justify-start justify-center items-center">
                  {data.map((repo: Repository) => (
                    <Card key={repo.id} className="group w-[300px]">
                      <CardHeader>
                        <div className="flex justify-start items-center mb-4 gap-4">
                          <Avatar>
                            <AvatarImage
                              src={repo.owner.avatar_url}
                              alt="avatar"
                            />
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
                        <h3 className="font-semibold tracking-tight">
                          {repo.name}
                        </h3>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                          {repo.description}
                        </p>
                      </CardContent>
                      <CardFooter className="mt-4">
                        <Link
                          href={`https://github.com/${repo.owner.login}/${repo.name}/commits`}
                          target="_blank"
                        >
                          <Button className="capitalize " variant="default">
                            view commits <ArrowUpRight weight="fill" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 md:grid-cols-2 lg:text-left">
              <div className="mb-20 mt-5">
                <h2 className="text-3xl font-bold mb-4 text-start">Gallery</h2>
                <div className="grid gap-4 sm:justify-start justify-center items-center">
                    Check back soon!! :D
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
