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
    <div className="h-screen flex flex-row justify-between w-full items-center p-6 text-[#000000]">
      <div className=" w-[40%] h-full pl-30 flex flex-col">
        <span className="font-[labelle] text-xl">{"<html>"}</span>
        <div className="w-full pl-6 h-full flex flex-col">
          <span className="font-[labelle] text-xl">{"<body>"}</span>
          <div className="w-full h-full text-nowrap flex flex-col justify-center pl-6">
            <span className="font-[labelle] text-lg">{"<h1>"}</span>
            <h1 className="font-[poppins] text-[40px] font-extrabold pl-6">
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
              <p className="text-sm text-wrap pl-6 text-animate">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <span className="font-[labelle] text-xl">{"</p>"}</span>
            </div>
            <div className="w-full">
              <span className="font-[labelle] text-xl">{"<button>"}</span>
              <div className="flex flex-row gap-3 pl-6 pb-1">
                <Link
                  href={""}
                  target="_blank"
                  className="text-[20px] border-2 py-2 px-3 font-extrabold hover:bg-black hover:text-white"
                >
                  DOWNLOAD CV
                </Link>
                <Link
                  href="/contact"
                  className="text-[20px] border-2 py-2 px-3 font-extrabold hover:bg-black hover:text-white"
                >
                  CONTACT ME
                </Link>
              </div>
              <span className="font-[labelle] text-xl">{"</button>"}</span>
            </div>
          </div>
          <span className="font-[labelle] text-xl">{"</body>"}</span>
        </div>
        <span className="font-[labelle] text-xl">{"</html>"}</span>
      </div>

      <div className="w-[60%] h-full relative flex justify-center items-center">
        <span className="font-[labelle] text-xl absolute left-[20%] top-0">
          {"<img>"}
        </span>
        <PersonImg className="" />
        <span className="font-[labelle] text-xl absolute right-[20%] bottom-0">
          {"</img>"}
        </span>
      </div>
    </div>
  );
};

export default Home;
