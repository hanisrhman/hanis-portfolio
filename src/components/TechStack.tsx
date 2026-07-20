import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import {
  zoomIn,
  staggerContainer,
  fadeUp,
} from "../utils/animations";

const techs = [
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact />,
    color: "text-cyan-500",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript />,
    color: "text-blue-600",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: <SiTailwindcss />,
    color: "text-sky-500",
  },
  {
    name: "Python",
    category: "Programming",
    icon: <FaPython />,
    color: "text-green-600",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
  {
    name: "Figma",
    category: "UI / UX",
    icon: <FaFigma />,
    color: "text-pink-500",
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: <SiPostman />,
    color: "text-orange-500",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-20 pt-8 pb-24 md:pt-10 md:pb-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Technologies
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Tech Stack
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The technologies, frameworks, and tools I use to build
            enterprise software, responsive web applications,
            and AI-powered solutions.
          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-20"
        >

          {techs.map((tech) => (

            <motion.div
              key={tech.name}
              variants={zoomIn}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.25,
              }}
              className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl p-8 text-center"
            >

              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-white shadow flex items-center justify-center text-5xl ${tech.color}`}
              >
                {tech.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-800">
                {tech.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {tech.category}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}