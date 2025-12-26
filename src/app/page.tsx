"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import PersonImg from "@/assets/images/Person.svg";
import AnimatedLetters from "@/components/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "A",
    "s",
    "h",
    "i",
    "s",
    "h",
    " ",
    "V",
    "e",
    "r",
    "m",
    "a",
  ];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="h-screen flex flex-row justify-between w-full items-center p-4 md:p-6 text-[#000000]">
      <div className="w-full lg:w-1/2 xl:w-[40%] h-full 2xl:pl-25 3xl:pl-30 flex flex-col">
        <span className="font-[labelle] text-xl">{"<html>"}</span>
        <div className="w-full pl-6 h-full flex flex-col">
          <span className="font-[labelle] text-xl">{"<body>"}</span>
          <div className="w-full h-full text-nowrap flex flex-col justify-center pl-6">
            <span className="font-[labelle] text-lg">{"<h1>"}</span>
            <h1 className="font-[poppins] text-[20px] md:text-[30px] xl:text-[40px] font-extrabold pl-6">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>

              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                isHollow={true}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                isHollow={false}
              />
            </h1>
            <span className="font-[labelle] text-xl">{"</h1>"}</span>
            <div className="w-full flex flex-col">
              <span className="font-[labelle] text-xl">{"<p>"}</span>
              <p className="text-xs md:text-sm text-wrap pl-6 text-animate">
                I am full stack developer with 1 year of hands-on experience in
                building modern web applications. I have a strong knowledge of
                React.js, Node.js, and Next.js, and enjoys creating efficient,
                responsive, user-friendly, and scalable solutions. With a solid
                understanding of both frontend and backend development.
              </p>
              <span className="font-[labelle] text-xl">{"</p>"}</span>
            </div>
            <div className="w-full">
              <span className="font-[labelle] text-xl">{"<button>"}</span>
              <div className="flex flex-col max-md:w-min md:flex-row gap-3 pl-6 pb-1">
                <Link
                  href={""}
                  target="_blank"
                  className="text-base xl:text-[20px] border-2 py-2 px-3 font-extrabold hover:bg-black hover:text-white"
                >
                  DOWNLOAD CV
                </Link>
                <Link
                  href="/contact"
                  className="text-base xl:text-[20px] border-2 py-2 px-3 font-extrabold hover:bg-black hover:text-white"
                >
                  CONTACT ME
                </Link>
              </div>
              <span className="font-[labelle] text-xl">{"</button>"}</span>
            </div>
            {/* image  */}
            <div className="hidden lg:hidden md:flex flex-col w-full h-full relative justify-center">
              <span className="font-[labelle] text-xl">{"<img>"}</span>
              <PersonImg className="w-full h-full -ml-20" />
              <span className="font-[labelle] text-xl">{"</img>"}</span>
            </div>
          </div>
          <span className="font-[labelle] text-xl">{"</body>"}</span>
        </div>
        <span className="font-[labelle] text-xl">{"</html>"}</span>
      </div>

      <div className="hidden lg:flex lg:w-1/2 xl:w-[60%] h-full relative justify-center- items-center">
        <span className="font-[labelle] text-xl absolute left-[20%] top-0">
          {"<img>"}
        </span>
        <PersonImg className="w-full h-full" />
        <span className="font-[labelle] text-xl absolute right-[20%] bottom-0">
          {"</img>"}
        </span>
      </div>
    </div>
  );
};

export default Home;
