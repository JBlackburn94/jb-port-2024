"use client";
import { motion } from "framer-motion";
import { riseWithFade, animateHero } from "./utils/animations";
import Image from "next/image";
import hero from "../../public/hero.webp";
import Skills from "./components/skills/Skills";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <main>
      <motion.section
        id="home"
        className="px-2 pt-16 h-3/4 md:h-screen md:px-10 md:pt-8"
        initial="initial"
        animate="animate"
      >
        <motion.div className="z-10 flex flex-col items-center justify-center pt-16 md:flex-row md:justify-between md:items-end h-1/4 md:pt-0 md:h-1/2">
          <motion.h1
            variants={riseWithFade}
            className="w-full text-2xl font-bold text-center select-none md:text-left md:w-1/4 md:text-4xl lg:text-5xl"
          >
            Hello, my name is Jason Blackburn
          </motion.h1>
          <motion.h2
            variants={riseWithFade}
            className="w-full text-xl text-center select-none md:text-right md:w-1/4 lg:text-2xl"
          >
            I am a Frontend Developer from London, UK.
          </motion.h2>
        </motion.div>
        <motion.div
          variants={animateHero}
          className="mt-4 overflow-hidden h-1/2"
        >
          <Image
            src={hero}
            alt="An image of a building."
            className="select-none"
          />
        </motion.div>
      </motion.section>
      <section className="flex flex-col items-center justify-center mt-16">
        <Skills />
      </section>
      <Portfolio />
    </main>
  );
}
