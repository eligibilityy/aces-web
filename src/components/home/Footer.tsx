import { Envelope, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-black/20 dark:border-white/20 bg-white dark:bg-black dark:border-gray-800">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="text-center text-sm">
            &copy; Association of Computer Enthusiasts (ACES). All Rights
            Reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <Link
              href="/"
              className="hover:text-pink-300/90 transition"
              passHref
            >
              <li>
                <GithubLogo size={28} />
              </li>
            </Link>
            <Link
              href="/"
              className="hover:text-pink-300/90 transition"
              passHref
            >
              <li>
                <Envelope size={28} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};
