import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "What's in for Foundation Week?",
    answer:
      "A relaxing space for gamers seeking a moment to catch their breath as they try to enjoy the many events held exclusively during the foundation week. This booth will most likely have a computer shop-like design or something homey (similar to nexus lab lounge).",
  },
  {
    question: "Are food and drinks allowed inside the booth?",
    answer:
      "The club has a designated candy bar. Only small candies are allowed inside the booth. Other food and drinks are not permitted to help keep the space clean and comfortable for everyone.",
  },
  {
    question: "Can I join ACES?",
    answer:
      "Only Senior High School students can join ACES. So if you are in the SHS community, give us a try! :)",
  },
];

export const FAQ = () => {
  return (
    <div className="py-[72px] sm:py-24 bg-white dark:bg-black sm:px-0 px-4">
      <div className="container">
        <h2 className="text-center text-4xl sm:text-5xl sm:max-w-xl mx-auto font-bold tracking-tight">
          Some Questions 🙋‍♂️
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
