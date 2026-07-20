import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Bachelor of Information Technology (Hons.) at Universiti Teknologi MARA (UiTM), graduating in 2026.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Industry Experience",
    description:
      "Completed a 3-month internship at Secure LabX Sdn. Bhd., contributing to enterprise software development and frontend engineering.",
  },
  {
    icon: <FaLightbulb />,
    title: "Interests",
    description:
      "Passionate about React, TypeScript, RESTful APIs, UI/UX design, and creating responsive web applications.",
  },
  {
    icon: <FaRocket />,
    title: "Career Goal",
    description:
      "Aspiring Software Engineer focused on building scalable, user-friendly, and impactful digital solutions.",
  },
];

const quickFacts = [
  {
    number: "5+",
    label: "Projects",
  },
  {
    number: "3",
    label: "Month Internship",
  },
  {
    number: "8+",
    label: "Technologies",
  },
  {
    number: "4",
    label: "Enterprise Systems",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Who I Am
          </h2>

          <p className="mt-6 text-center text-lg leading-8 text-slate-600">
            I'm a final-year Information Technology student with professional
            internship experience in enterprise software development.
            I enjoy building modern web applications, solving real-world
            problems, and continuously learning new technologies.
          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14 md:mt-16"
        >

          {aboutCards.map((card) => (

            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="h-full rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm hover:shadow-xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">

                {card.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">

                {card.title}

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                {card.description}

              </p>

            </motion.div>

          ))}

        </motion.div>

        {/* Quick Facts */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 md:mt-16"
        >

          {quickFacts.map((fact) => (

            <motion.div
              key={fact.label}
              variants={fadeUp}
              whileHover={{
                scale: 1.04,
              }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md text-center"
            >

              <h3 className="text-4xl font-black text-blue-600">

                {fact.number}

              </h3>

              <p className="mt-3 text-slate-600 font-medium">

                {fact.label}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}