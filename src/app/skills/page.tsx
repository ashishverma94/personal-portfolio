"use client";
import { SkillsData } from "@/data/data";
import AnimatedLetters from "@/components/AnimatedLetters";
import { ComponentType, FC, SVGProps, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen h-full scroll overflow-hidden flex flex-col w-full items-center p-6 gap-6 text-black">
      <h1 className="text-center text-[40px] font-extrabold">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["M", "y", " "]}
          idx={15}
          isHollow={true}
        />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["S", "k", "i", "l", "l", "s"]}
          idx={15}
          isHollow={false}
        />
      </h1>

      {/* Accordion */}
      <div className="h-full w-full justify-center flex overflow-scroll scroll scroll-smooth">
        <div className="w-full max-w-6xl flex flex-col gap-6 pt-4 h-max">
          {SkillsData.map((group, index) => (
            <div
              key={group.category}
              className="border-2 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full cursor-pointer flex justify-between items-center px-6 py-4 text-xl font-bold transition ${
                  openIndex === index ? "bg-[black] text-white" : "bg-white"
                }`}
              >
                {group.category}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap justify-center gap-10 p-6">
                    {group.skills.map((skill) => (
                      <SkillCard
                        key={skill.skillName}
                        name={skill.skillName}
                        icon={skill.skillIcon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

interface ISkill {
  icon: ComponentType<SVGProps<SVGElement>>;
  name: string;
}

const SkillCard: FC<ISkill> = ({ icon, name }) => {
  const Icon = icon;
  return (
    <div className="text-animate-hover">

    <div className="group hover:scale-125 transition-all duration-1000 w-36 h-36 hover:bg-black hover:text-white flex flex-col gap-4 justify-center items-center border-2 p-4">
      <Icon className="grayscale-75 group-hover:grayscale-0 size-17 transition duration-300" />
      <span className="text-xl font-semibold">{name}</span>
    </div>
    </div>
  );
};
