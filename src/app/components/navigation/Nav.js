"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "-150%", opacity: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const links = [
    {
      id: 1,
      title: "Home",
      link: "#home",
    },
    {
      id: 2,
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 3,
      title: "Contact",
      link: "#contact",
    },
    {
      id: 4,
      title: <FaLinkedin size={40} />,
      link: "",
    },
    {
      id: 5,
      title: <FaGithubSquare size={40} />,
    },
  ];

  return (
    <nav className="fixed z-20 flex items-start justify-start w-full h-screen">
      <motion.div
        initial={{
          x: "-100",
        }}
        animate={{
          x: 0,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-20 p-3"
      >
        {isOpen ? (
          <FaTimes size={40} className="text-white" />
        ) : (
          <FaBars size={40} />
        )}
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="absolute z-10 w-full h-screen text-white bg-black md:w-1/4"
      >
        <ul className="flex flex-col items-center justify-center p-10 md:justify-start md:items-start">
          {links.map(({ id, title, link }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
              className="mx-1 my-10 select-none md:mx-10"
            >
              <a href={link} className="text-lg font-semibold md:text-xl">
                {title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
