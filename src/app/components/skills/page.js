import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithubSquare,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiVercel } from "react-icons/si";
import { riseWithFade } from "@/app/utils/animations";

export default function Skills() {
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
    {
      id: 3,
      title: "JavaScript",
      icon: <IoLogoJavascript size={40} />,
    },
    {
      id: 4,
      title: "React",
      icon: <FaReact size={40} />,
    },
    {
      id: 5,
      title: "Next.Js",
      icon: <SiNextdotjs size={40} />,
    },
    {
      id: 6,
      title: "Tailwind",
      icon: <SiTailwindcss size={40} />,
    },
    {
      id: 7,
      title: "Framer",
      icon: <SiFramer size={40} />,
    },
    {
      id: 8,
      title: "GitHub",
      icon: <FaGithubSquare size={40} />,
    },
    {
      id: 9,
      title: "Vercel",
      icon: <SiVercel size={40} />,
    },
    {
      id: 10,
      title: "Python",
      icon: <FaPython size={40} />,
    },
  ];

  return (
    <motion.div
      variants={riseWithFade}
      className="flex flex-col items-center justify-center w-full overflow-hidden md:w-1/2 lg:w-2/6 h-1/2"
    >
      <h2 className="text-xl font-semibold">Tech Stack</h2>
      <ul className="flex flex-wrap mt-4 text-center justify-evenly">
        {techStack.map(({ id, title, icon }) => (
          <span
            key={id}
            className="flex flex-col items-center px-2 my-4 min-w-1/4"
          >
            {icon}
            <li className="text-lg font-semibold">{title}</li>
          </span>
        ))}
      </ul>
    </motion.div>
  );
}
