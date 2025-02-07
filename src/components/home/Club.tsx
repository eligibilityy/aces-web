import { GameController, FileHtml, Terminal } from "@phosphor-icons/react/dist/ssr";
const skills = [
  {
    title: "Game Development",
    description:
      "Crafting immersive worlds and interactive gameplay experiences.",
    icon: <GameController size={30} />,
  },
  {
    title: "Web Development",
    description: "Designing dynamic websites and powerful web applications.",
    icon: <FileHtml size={30} />,
  },
  {
    title: "Computer Programming",
    description:
      "Building efficient solutions and innovative software through code.",
    icon: <Terminal size={30} />,
  },
];

export const Club = () => {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-[72px] sm:py-24">
      <div className="container max-w-6xl">
        <h2 className="text-center font-bold text-4xl sm:text-5xl tracking-tight">
          Our Superpowers⚡
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-base sm:text-xl text-black/70 dark:text-white/70">
            Our general skills and departments in ACES. 
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {skills.map(({ title, description, icon }) => (
            <div
              key={title}
              className="relative rounded-xl overflow-hidden border border-black/30 dark:border-white/30 text-center sm:flex-1 "
            >

              {/* Content */}
              <div className="relative z-10 px-5 py-10 items-center justify-center">
                <div className="inline-flex h-14 w-14 dark:bg-white bg-black dark:text-black text-white justify-center items-center rounded-lg mx-auto">
                  {icon}
                </div>
                <h3 className="mt-6 font-bold text-xl">{title}</h3>
                <p className="mt-2 text-sm sm:text-base dark:text-white/70 text-black/70">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
