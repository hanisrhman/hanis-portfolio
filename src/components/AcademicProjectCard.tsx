import type { Project } from "../data/industryProjects";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import ProjectImage from "./ProjectImage";

interface Props {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function AcademicProjectCard({ project, onViewDetails }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="h-full bg-white rounded-[24px] shadow-[0_12px_40px_rgba(15,23,42,0.08)] overflow-hidden border border-slate-100/80 flex flex-col"
    >
      <ProjectImage
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-7 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold mt-3 text-slate-900 leading-tight">
          {project.title}
        </h3>

        <p
          className="text-slate-600 mt-4 leading-7"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden"
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center justify-center gap-2.5 w-full rounded-2xl border border-slate-200 bg-slate-900 text-white px-4 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800"
            type="button"
          >
            <FiEye className="text-base" />
            View Details
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
