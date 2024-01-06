"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
  ];

  return (
    <nav className="fixed z-20 items-center justify-start w-full h-16 p-4 lg:flex">
      <motion.div
        initial={{
          x: "-100",
        }}
        animate={{
          x: 0,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-white"
      >
        {isOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="z-10 p-4 text-white bg-black rounded"
      >
        <ul className="flex flex-row items-center justify-center">
          {links.map(({ id, title, link }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
              className="mx-1 select-none md:mx-10"
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
