import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold text-blue-400">
              {profile.name}
            </h2>

            <p className="mt-4 text-slate-300 leading-8">
              {profile.role} • Frontend Developer
            </p>

            <p className="text-slate-400">
              {profile.location}
            </p>

          </div>

          {/* Quick Links */}

          <div className="text-center md:text-left">

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#achievements"
                  className="hover:text-blue-400 transition"
                >
                  Achievements
                </a>
              </li>

              <li>
                <a
                  href="#tech"
                  className="hover:text-blue-400 transition"
                >
                  Tech Stack
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="text-center md:text-left">

            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="space-y-4">

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition"
              >
                <FaEnvelope />

                {profile.email}
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition"
              >
                <FaGithub />

                GitHub
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition"
              >
                <FaLinkedin />

                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Hanis Sofea. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition shadow-lg"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}