"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-8 text-white lg:p-0">
      <div>
        <motion.h1
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="text-2xl font-bold select-none md:text-4xl lg:text-5xl"
        >
          Hello, my name is
          <span className="text-purple-600 uppercase"> Jason Blackburn</span>!
        </motion.h1>
        <motion.p
          className="py-4 text-lg font-semibold select-none md:text-2xl lg:text-4xl"
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
            ease: "backInOut",
          }}
        >
          I am a{" "}
          <span className="text-yellow-500 uppercase">Frontend Developer </span>
          from London{" "}
          <span role="img" aria-label="UK Flag">
            🇬🇧
          </span>
        </motion.p>
      </div>
    </main>
  );
}
