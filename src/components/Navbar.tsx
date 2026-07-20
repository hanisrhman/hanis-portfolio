import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { profile } from "../data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Achievements", href: "#achievements" },
    { title: "Tech Stack", href: "#tech" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
            HS
          </div>

          <div>
            <h1 className="font-bold text-xl text-slate-800">
              {profile.name}
            </h1>

            <p className="text-sm text-slate-500">
              {profile.role}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-slate-700 font-medium transition hover:text-blue-600 relative group"
            >
              {item.title}

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-600 hover:text-blue-600 transition"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-600 hover:text-blue-600 transition"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold shadow-lg transition"
          >
            <FaDownload />
            Download CV
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">

          <div className="flex flex-col py-4">

            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 hover:bg-slate-100 transition"
              >
                {item.title}
              </a>
            ))}

            <div className="flex gap-6 px-6 py-4">

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-700"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-700"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-2 flex justify-center items-center gap-2 bg-blue-600 text-white rounded-xl py-3 font-semibold"
            >
              <FaDownload />
              Download CV
            </a>

          </div>
        </div>
      )}
    </header>
  );
}