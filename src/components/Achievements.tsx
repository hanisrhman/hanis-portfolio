import { motion } from "framer-motion";
import {
  FaAward,
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const achievements = [
  {
    icon: <FaLaptopCode />,
    title: "Software Engineer Intern",
    subtitle: "Secure LabX Sdn. Bhd.",
    description:
      "Completed a 3-month internship developing enterprise software using React, TypeScript, REST APIs, and UI/UX implementation.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Enterprise Projects",
    subtitle: "Real Industry Experience",
    description:
      "Contributed to CMS Secure, CMS GEP, HR Payroll System, Jaga Drone, and an AI Water Pump Detection project.",
  },
  {
    icon: <FaAward />,
    title: "Academic Excellence",
    subtitle: "Vice Chancellor Award (ANC)",
    description:
      "Received the Anugerah Naib Canselor (ANC) from UiTM for outstanding academic performance - Diploma.",
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    subtitle: "Modern Technologies",
    description:
      "Hands-on experience with React, TypeScript, LoopBack, MySQL, Python, OpenCV, YOLOv8, Git, Figma, and Postman.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 pt-8 pb-24 md:pt-10 md:pb-28 bg-slate-50"
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
            Highlights
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Achievements
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A summary of my academic achievements, internship experience,
            and technical expertise gained throughout my university journey.
          </p>

        </motion.div>

        {/* Achievement Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20"
        >

          {achievements.map((item) => (

            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                {item.subtitle}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}