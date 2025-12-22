"use client";
import AnimatedLetters from "@/components/AnimatedLetters";
import { FC, useEffect, useState } from "react";
import { ExperienceData } from "@/data/data";
import Image, { StaticImageData } from "next/image";
import RedirectIcon from "@/assets/icons/Redirect.svg";
import Link from "next/link";

const BASE_DELAY = 1; 
  const STAGGER = 0.25;

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="h-screen flex flex-col w-full items-center p-6 gap-6 text-black">
      <h1 className="text-center text-[40px] font-extrabold">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["M", "y", " "]}
          idx={15}
          isHollow={true}
        />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
          idx={15}
          isHollow={false}
        />
      </h1>

      <div className="w-full max-w-5xl flex flex-col gap-6 h-full overflow-scroll scroll scroll-smooth">
        {ExperienceData.map((exp, index) => (
        //   <ExperienceCard key={idx} {...exp} />
         <div
           key={index}
          className="animate__animated animate__fadeInUp"
          style={{
            animationDelay: `${BASE_DELAY + index * STAGGER}s`,
            animationFillMode: "both",
          }}
        >
          <ExperienceCard {...exp} />
        </div>
        ))}
        <div className="w-full min-h-[20vh]"></div>
      </div>
    </div>
  );
};

export default Experience;

interface IExp {
  company: string;
  role: string;
  duration: string;
  description: string[];
  icon: StaticImageData;
  companyLink: string;
}

const ExperienceCard: FC<IExp> = ({
  company,
  role,
  duration,
  description,
  icon,
  companyLink,
}) => {
  return (
    <div className="p-6 relative flex flex-col gap-4 rounded-2xl bg-[black] text-white border shadow-lg hover:shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <div className="p-0.5 bg-white rounded-full flex justify-center items-center">
            <Image
              src={icon}
              alt={company}
              className="size-10 rounded-full bg-white"
            />
          </div>
          <h3 className="text-xl font-semibold tracking-wide">{company}</h3>
          <Link href={companyLink} target="_blank">
            <RedirectIcon className="hover:scale-110 transition-all duration-200 text-white" />
          </Link>
        </div>
        <span className="italic">{duration}</span>
      </div>

      <div className="flex justify-between mt-4 items-center text-sm text-gray-300">
        {role}
      </div>

      <ul className="list-disc pl-5 space-y-2 text-gray-200 text-sm leading-relaxed">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="absolute w-68 h-22 bg-[white] rounded-br-3xl pr-2 pb-2 top-0 left-0">
        <div className="w-full h-full bg-black rounded-2xl flex p-4 items-center">
          <div className="flex flex-row items-center gap-3">
            <div className="p-0.5 bg-white rounded-full flex justify-center items-center">
              <Image
                src={icon}
                alt={company}
                className="size-10 rounded-full bg-white"
              />
            </div>
            <h3 className="text-lg font-semibold tracking-wide text-nowrap">
              {company}
            </h3>
            <Link href={companyLink} target="_blank">
              <RedirectIcon className="hover:scale-110 transition-all duration-200 text-white" />
            </Link>
          </div>
        </div>
        <div className="size-8 absolute bg-transparent top-0 -right-8 rounded-tl-2xl shadow-[white_-5px_-8px_0px]"></div>
        <div className="size-8 absolute bg-transparent -bottom-8 rounded-tl-2xl shadow-[white_-5px_-8px_0px]"></div>
      </div>
    </div>
  );
};
