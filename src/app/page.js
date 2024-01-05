"use client";
import { motion } from "framer-motion";
import Skills from "./skills/page";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-start h-screen p-8 pt-24 text-white lg:pt-40 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50">
        <div className="z-10 flex flex-col items-center justify-center w-full p-4 rounded-lg md:w-1/2">
          <motion.h1
            initial={{
              x: "-100%",
              scale: 0,
            }}
            animate={{
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="text-2xl font-bold select-none md:text-4xl lg:text-5xl"
          >
            Hello, my name is
            <span className="text-yellow-500 uppercase">
              {" "}
              Jason Blackburn
            </span>{" "}
            <span role="img" aria-label="Waving hand">
              👋
            </span>
          </motion.h1>
          <motion.p
            initial={{
              x: "-100%",
              scale: 0,
            }}
            animate={{
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="text-lg font-semibold select-none sm:mt-4 md:mt-8 md:text-2xl lg:text-4xl"
          >
            I am a{" "}
            <span className="text-yellow-500 uppercase">
              Frontend Developer{" "}
            </span>
            from London{" "}
            <span role="img" aria-label="UK Flag">
              🇬🇧
            </span>
          </motion.p>
          <motion.a
            initial={{
              x: "-100%",
              scale: 0,
            }}
            animate={{
              x: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
            className="p-2 mt-10 font-semibold text-center bg-yellow-500 rounded lg:mt-16 md:p-4"
          >
            Click here to see my work!
          </motion.a>
        </div>
      </section>
      <Skills />
    </main>
  );
}
