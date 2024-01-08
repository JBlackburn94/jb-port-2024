"use client";
import { motion } from "framer-motion";
import Portfolio from "./portfolio/page";
import { FaHtml5, FaCss3Alt, FaReact, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import { riseWithFade, animateHero } from "./utils/animations";
import Image from "next/image";
import Hero from "/Users/jasonblackburn/Desktop/Code/anim-port/jb-port-2024/public/hero.jpg";

export default function Home() {
  const techStack = [
    {
      id: 1,
      title: "HTML",
      icon: <FaHtml5 size={40} />,
    },
    {
      id: 2,
      title: "CSS",
      icon: <FaCss3Alt size={40} />,
    },
  ];

  return (
    <main>
      <motion.section
        id="home"
        className="h-screen px-2 pt-16 md:px-10 md:pt-0"
        initial="initial"
        animate="animate"
      >
        <motion.div className="z-10 flex flex-row items-center justify-between pt-8 md:items-end h-1/4 md:pt-0 md:h-1/2">
          <motion.h1
            variants={riseWithFade}
            className="text-3xl font-bold select-none lg:text-5xl sm:w-1/4 lg:w-1/4"
          >
            Hello, my name is Jason Blackburn
          </motion.h1>
          <motion.h2
            variants={riseWithFade}
            className="text-xl text-right select-none lg:text-2xl sm:w-1/4 lg:w-1/4"
          >
            I am a Frontend Developer from London, UK.
          </motion.h2>
        </motion.div>
        <motion.div variants={animateHero} className="overflow-hidden h-1/2">
          <Image src={Hero} alt="An image of a building." />
        </motion.div>

        <motion.div
          variants={riseWithFade}
          className="flex flex-col items-center justify-center w-full overflow-hidden rounded-md md:w-1/2 lg:w-2/6 h-1/2"
        >
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <ul className="flex flex-wrap justify-center mt-4 text-center">
            {techStack.map(({ id, title, icon }) => (
              <span
                key={id}
                className="flex flex-col items-center px-2 my-4 min-w-1/4"
              >
                {icon}
                <li className="text-lg font-semibold">{title}</li>
              </span>
            ))}
            {/* <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <FaHtml5 size={40} />
              <li className="text-lg font-semibold">HTML</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <FaCss3Alt size={40} />
              <li className="text-lg font-semibold">CSS</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <IoLogoJavascript size={40} />
              <li className="text-lg font-semibold">JavaScript</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <FaReact size={40} />
              <li className="text-lg font-semibold">React</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <SiNextdotjs size={40} />
              <li className="text-lg font-semibold">Next.Js</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <SiTailwindcss size={40} />
              <li className="text-lg font-semibold">Tailwind</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <SiFramer size={40} />
              <li className="text-lg font-semibold">Framer</li>
            </span>
            <span className="flex flex-col items-center px-2 my-4 min-w-1/4">
              <FaGithubSquare size={40} />
              <li className="text-lg font-semibold">GitHub</li>
            </span> */}
          </ul>
        </motion.div>
      </motion.section>
    </main>
  );
}
