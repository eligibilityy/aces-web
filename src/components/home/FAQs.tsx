import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "Who's the club monitor of ACES?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate perferendis cum quae voluptatem pariatur harum corporis accusantium tenetur maxime!",
  },
  {
    question: "What's in for Foundation Week?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos ullam vel impedit consequuntur, nobis corporis quas? Animi non eveniet sapiente voluptas sequi.",
  },
  {
    question: "Can I join ACES?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere recusandae illo tempore incidunt, laudantium doloremque officia ipsa aliquam ea blanditiis reprehenderit tenetur autem labore accusantium esse. Placeat temporibus ducimus numquam?",
  },
];

export const FAQ = () => {
  return (
    <div className="py-[72px] sm:py-24 bg-white dark:bg-black sm:px-0 px-4">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-xl mx-auto font-bold tracking-tight">
          Frequently Asked Questions 🙋‍♂️
        </h2>
        <div className="mt-6 pb-6 max-w-xl mx-auto relative">
          {items.map(({ question, answer }) => {
            return (
              <Accordion
                key={question}
                type="single"
                collapsible
                className="w-full py-2"
              >
                <AccordionItem value={question}>
                  <AccordionTrigger className="sm:text-lg text-[1rem]">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black/70 dark:text-white/70">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};
