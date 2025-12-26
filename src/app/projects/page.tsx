"use client";
import Link from "next/link";
import { projectData } from "@/data/data";
import QRModal from "@/components/QRPopup";
import { IoQrCode } from "react-icons/io5";
import { StaticImageData } from "next/image";
import { RiGithubLine } from "react-icons/ri";
import RedirectIcon from "@/assets/icons/Redirect.svg";
import AnimatedLetters from "@/components/AnimatedLetters";
import { FC, ReactNode, useEffect, useState } from "react";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="h-screen flex flex-col w-full items-center p-6 gap-6 text-[#000000]">
      <h1 className="text-center text-[40px] font-extrabold">
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "y", " "]}
            idx={15}
            isHollow={true}
          />
        </span>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
            isHollow={false}
          />
        </span>
      </h1>

      <div className="w-full flex flex-col gap-25 pt-26 h-full overflow-y-scroll scroll">
        {projectData.map((project, index) => (
          <ProjectCard key={index} id={index} {...project} />
        ))}
        <div className="w-full min-h-25"></div>
      </div>
    </div>
  );
};

export default Projects;

interface IProject {
  imgUrl: StaticImageData;
  heading: string;
  desc: ReactNode;
  link: string;
  skills: string[];
  githubLink: string;
  key: number;
  id: number;
}

const ProjectCard: FC<IProject> = ({
  imgUrl,
  heading,
  desc,
  link,
  skills,
  githubLink,
  key,
  id,
}) => {
  const [showQR, setShowQR] = useState(false);
  return (
    <div
      className={`min-h-75 w-full flex gap-10 max-w-300 mx-auto justify-center items-center ${
        id % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="bg-[black] p-1 h-full rounded-[19px] text-white">
        <div
          style={{
            background: `url(${imgUrl.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-full min-w-130 z-10 rounded-2xl inverted-radius relative overflow-hidden"
        >
          <div className="w-20 h-15 bg-[black] rounded-br-2xl relative">
            <div className="size-8 absolute bg-transparent -right-8 rounded-tl-2xl shadow-[black_-16px_-8px_0px]"></div>
            <div className="size-8 absolute bg-transparent -bottom-8 rounded-tl-2xl shadow-[black_-16px_-8px_0px]"></div>
            <div className="w-full h-full justify-center items-center flex font-extrabold text-3xl">
              {id < 9 ? `0${id + 1}` : id + 1}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl">{heading}</h2>
        <div>{desc ? desc : "Description coming soon..."}</div>

        <div className="flex font-[poppins] gap-2 flex-wrap">
          {skills?.map((skill, idx) => (
            <div
              key={idx}
              className="px-3 py-1 text-[12px] tracking-wider border rounded-sm"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="inline-flex w-min gap-3 items-center">
          {githubLink && (
            <Link href={githubLink} target="_blank">
              <RiGithubLine className="size-6.5 hover:scale-110 transition-all duration-200 cursor-pointer" />
            </Link>
          )}
          <button onClick={() => setShowQR(true)}>
            <IoQrCode className="size-5.5 hover:scale-110 transition-all duration-200 cursor-pointer" />
          </button>
          <Link href={link} target="_blank">
            <RedirectIcon className="hover:scale-110 transition-all duration-200" />
          </Link>
        </div>
      </div>
      {showQR && <QRModal url={link} onClose={() => setShowQR(false)} />}
    </div>
  );
};
