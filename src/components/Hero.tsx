import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
  FaEnvelope,
} from "react-icons/fa";

import {
  fadeLeft,
  fadeRight,
} from "../utils/animations";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700 font-medium shadow-sm">
              🟢 Open to Graduate Opportunities
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">

              Hi,

              <br />

              I'm

              <span className="text-blue-600">
                {" "}{profile.name}
              </span>

            </h1>

            <div className="mt-6 space-y-2">

              <h2 className="text-3xl font-bold text-slate-700">
                {profile.role}
              </h2>

              <p className="text-xl text-slate-500">
                Frontend Developer
              </p>

              <p className="text-xl text-slate-500">
                React Developer
              </p>

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              Final-year Information Technology student passionate
              about building enterprise web applications using
              React, TypeScript, RESTful APIs, and modern UI/UX.
              Experienced in real-world software development through
              my internship at Secure LabX Sdn. Bhd.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg transition"
                style={{ color: "#ffffff" }}
              >
                <FaDownload />

                Download Resume

              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="#projects"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-100 transition"
                style={{ color: "#0f172a" }}
              >
                Explore Projects
              </motion.a>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-10 justify-center lg:justify-start">

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl hover:bg-blue-600 hover:text-white transition"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl hover:bg-blue-600 hover:text-white transition"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative w-full max-w-[470px]"
            >

              <div className="relative rounded-[34px] border border-white/80 bg-white/65 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[40%_60%_56%_44%/44%_40%_60%_56%] border-4 border-white shadow-xl">
                  <img
                    src="/profile.png"
                    alt={profile.name}
                    className="h-[430px] w-full object-cover object-center md:h-[520px]"
                  />
                </div>
              </div>

              <motion.a
                href={`mailto:${profile.email}?subject=Contact%20from%20Portfolio`}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="absolute -top-4 right-3 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg z-50"
                aria-label={`Email ${profile.name}`}
              >
                <FaEnvelope className="text-slate-700" />
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Contact</p>
                  <p className="text-sm font-bold text-slate-900">Email Me</p>
                </div>
              </motion.a>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.4, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <FaArrowDown className="text-3xl text-blue-600" />

      </motion.div>

    </section>
  );
}