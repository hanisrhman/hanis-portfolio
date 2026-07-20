import { motion } from "framer-motion";
import { experience } from "../data/experience";
import {
  fadeUp,
  staggerContainer,
} from "../utils/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 pt-8 pb-24 md:pt-10 md:pb-28 bg-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Professional Journey
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My journey throughout my internship at Secure LabX Sdn. Bhd.,
            where I contributed to enterprise software development,
            frontend engineering, AI solutions, UI/UX implementation,
            and technical documentation.
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-20"
        >

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-blue-200 rounded-full"></div>

          <div className="space-y-10">

            {experience.map((item) => (

              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative pl-16"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">

                  <div className="w-3 h-3 rounded-full bg-white"></div>

                </div>

                {/* Card */}

                <div className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all p-8">

                  {/* Date */}

                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {item.date}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Company */}

                  <p className="mt-2 text-slate-500">
                    {item.company} • {item.location}
                  </p>

                  {/* Description */}

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3 mt-8">

                    {item.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}