"use client";
import { motion } from "framer-motion";
import Portfolio from "./portfolio/page";
import { FaHtml5, FaCss3Alt, FaReact, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen px-4 pt-16 lg:flex-row lg:justify-evenly bg-gradient-to-r from-violet-500/75 to-fuchsia-500/75"
      >
        <motion.div
          initial={{ scale: 0, x: "-100%" }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="flex flex-col w-full p-5 mx-4 my-4 rounded-md justify-evenly md:w-1/2 lg:w-2/6 h-1/2 bg-black/15"
        >
          <h1 className="text-5xl font-bold select-none">
            Hello, my name is Jason{" "}
            <span role="img" aria-label="Waving Hand Emoji">
              👋
            </span>
          </h1>
          <h2 className="text-4xl font-bold select-none">
            I am a <span className="text-yellow-400">Frontend Developer</span>{" "}
            from London{" "}
            <span role="img" aria-label="UK Flag">
              🇬🇧
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="flex flex-col items-center justify-start w-full p-5 mx-4 my-4 rounded-md md:w-1/2 lg:w-2/6 h-1/2 bg-black/15"
        >
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <ul className="flex flex-wrap justify-center mt-4 text-center">
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <FaHtml5 size={40} />
              <li className="text-lg font-semibold text-yellow-400">HTML</li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <FaCss3Alt size={40} />
              <li className="text-lg font-semibold text-yellow-400">CSS</li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <IoLogoJavascript size={40} />
              <li className="text-lg font-semibold text-yellow-400">
                JavaScript
              </li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <FaReact size={40} />
              <li className="text-lg font-semibold text-yellow-400">React</li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <SiNextdotjs size={40} />
              <li className="text-lg font-semibold text-yellow-400">Next.Js</li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <SiTailwindcss size={40} />
              <li className="text-lg font-semibold text-yellow-400">
                Tailwind
              </li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <SiFramer size={40} />
              <li className="text-lg font-semibold text-yellow-400">Framer</li>
            </span>
            <span className="flex flex-col items-center w-1/4 px-2 my-4">
              <FaGithubSquare size={40} />
              <li className="text-lg font-semibold text-yellow-400">GitHub</li>
            </span>
          </ul>
        </motion.div>
      </section>
      <Portfolio />
    </main>
  );
}
