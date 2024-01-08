"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import bsWeb from "../../../public/bsWeb.webp";
import weatherApp from "../../../public/weatherApp.webp";

const isVisible = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export default function Portfolio() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const portfolio = [
    {
      id: 1,
      header: "Beauty School",
      description: "This project was a redesign of the Beauty School website.",
      techStack: "React, Next.Js, Tailwind",
      deploy: "GitHub, Vercel",
      live: "https://beauty-school-kltc.vercel.app/",
      repo: "https://github.com/JBlackburn94/beauty-school",
      src: bsWeb,
      alt: "The home page of the Beauty School website.",
    },
    {
      id: 2,
      header: "Weather App",
      description:
        "This project was built using the Open Weather API. It allows the user to collect weather information based on the location they input.",
      techStack: "HTML, CSS, JavaScript",
      deploy: "GitHub, GitHub Pages",
      live: "https://jblackburn94.github.io/weatherApp/",
      repo: "https://github.com/JBlackburn94/weatherApp",
      src: weatherApp,
      alt: "The landing page for a Weather App",
    },
  ];
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-start h-screen mt-8"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={isVisible}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col items-start justify-start"
      >
        <h2 className="text-xl font-semibold">My Work</h2>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={isVisible}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-wrap items-start w-full mt-10 justify-evenly md:flex-row "
      >
        {portfolio.map(
          ({ id, header, description, techStack, deploy, repo, src, alt }) => (
            <div
              className="flex flex-col w-full p-8 m-4 rounded md:w-1/2 bg-black/10"
              key={id}
            >
              <Image src={src} alt={alt} />
              <h4 className="text-lg font-semibold">{header}</h4>
              <p>{description}</p>
              <p className="className=flex items-center my-2">
                Built Using: {techStack}
              </p>
              <a href={deploy} target="_blank">
                Live Site
              </a>
              <a href={repo} target="_blank">
                Repo
              </a>
            </div>
          )
        )}
      </motion.div>
    </section>
  );
}
