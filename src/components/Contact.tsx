import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 pt-8 pb-24 md:pt-10 md:pb-28 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="uppercase tracking-[4px] text-blue-100 font-semibold">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
            Let's Work Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            I am currently looking for graduate opportunities in Software
            Engineering, Frontend Development, and Web Development.
            Feel free to reach out if you'd like to collaborate or discuss
            potential opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Email */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <FaEnvelope className="text-4xl mx-auto mb-5" />

            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-4 text-blue-100 break-words">
              {profile.email}
            </p>
          </motion.div>

          {/* Phone */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <FaPhoneAlt className="text-4xl mx-auto mb-5" />

            <h3 className="text-2xl font-semibold">
              Phone
            </h3>

            <p className="mt-4 text-blue-100">
              {profile.phone}
            </p>
          </motion.div>

          {/* Location */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <FaMapMarkerAlt className="text-4xl mx-auto mb-5" />

            <h3 className="text-2xl font-semibold">
              Location
            </h3>

            <p className="mt-4 text-blue-100">
              {profile.location}
            </p>
          </motion.div>

        </div>

        {/* Social Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          <a
            href={`mailto:${profile.email}?subject=Contact%20from%20Portfolio`}
            className="flex items-center gap-3 bg-white text-blue-600 px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            style={{ color: '#0f172a', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '16px' }}
            aria-label="Email me"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 bg-white text-blue-600 px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            style={{ color: '#0f172a', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '16px' }}
            aria-label="Call me"
          >
            <FaPhoneAlt />
            Call
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-yellow-400 text-slate-900 px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            <FaDownload />
            Download CV
          </a>

        </div>

      </div>
    </section>
  );
}