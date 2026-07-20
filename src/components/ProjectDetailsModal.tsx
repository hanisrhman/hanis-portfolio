import { useEffect, useState } from "react";
import type { Project } from "../data/industryProjects";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import ProjectImage from "./ProjectImage";
import VideoModal from "./VideoModal";

const WORKFLOW_STEPS = ["Problem", "Planning", "Development", "Testing", "Deployment", "Result"];

function Lightbox({
  image,
  caption,
  onClose,
  onPrev,
  onNext
}: {
  image: string;
  caption: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24 }}
      className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="h-full flex items-center justify-center px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full w-12 h-12 border border-white/25 text-white/95 hover:bg-white/10"
          aria-label="Close lightbox"
        >
          <FiX className="text-xl" />
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 md:left-8 inline-flex items-center justify-center rounded-full w-12 h-12 border border-white/25 text-white/95 hover:bg-white/10"
          aria-label="Previous screenshot"
        >
          <FiArrowLeft className="text-xl" />
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 md:right-8 inline-flex items-center justify-center rounded-full w-12 h-12 border border-white/25 text-white/95 hover:bg-white/10"
          aria-label="Next screenshot"
        >
          <FiArrowRight className="text-xl" />
        </button>

        <div className="w-full max-w-6xl">
          <div className="rounded-[30px] overflow-hidden border border-white/20 shadow-[0_35px_90px_rgba(0,0,0,0.65)]">
            <ProjectImage key={image} src={image} alt={caption} className="w-full max-h-[72vh] object-contain bg-black" />
          </div>

          <div className="mt-5 text-center text-white">
            <h4 className="text-2xl font-bold tracking-tight">{caption}</h4>
            <p className="mt-2 text-white/70 text-base leading-7">Project gallery preview.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectDetailsModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = project || lightboxIndex !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [project, lightboxIndex]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (!project) {
        return;
      }

      if (event.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
          return;
        }

        onClose();
        return;
      }

      if (lightboxIndex === null) {
        return;
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((previous) => {
          if (previous === null) {
            return 0;
          }

          return (previous + 1) % project.gallery.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((previous) => {
          if (previous === null) {
            return 0;
          }

          return (previous - 1 + project.gallery.length) % project.gallery.length;
        });
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, lightboxIndex, onClose]);

  function showPreviousScreenshot() {
    if (!project || lightboxIndex === null) {
      return;
    }

    setLightboxIndex((previous) => {
      if (previous === null) {
        return 0;
      }

      return (previous - 1 + project.gallery.length) % project.gallery.length;
    });
  }

  function showNextScreenshot() {
    if (!project || lightboxIndex === null) {
      return;
    }

    setLightboxIndex((previous) => {
      if (previous === null) {
        return 0;
      }

      return (previous + 1) % project.gallery.length;
    });
  }

  const workflow = project?.workflow ?? WORKFLOW_STEPS;
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] bg-slate-950/85 backdrop-blur-xl"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.985 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="h-full overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 md:py-12">
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-full w-12 h-12 border border-white/20 text-white hover:bg-white/10"
                    aria-label="Close project details"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                <section className="mt-4 rounded-[32px] border border-white/12 bg-white/[0.06] shadow-[0_25px_70px_rgba(0,0,0,0.35)] px-6 md:px-10 py-8 md:py-12">
                  <div className="rounded-[24px] overflow-hidden border border-white/12 mb-8">
                    <ProjectImage key={project.cover} src={project.cover} alt={`${project.title} cover`} className="w-full h-56 md:h-72 object-cover" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.24em] text-white/70 font-semibold">{project.category}</p>
                  <h3 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl">{project.title}</h3>
                  <p className="mt-6 max-w-4xl text-white/75 text-lg md:text-xl leading-8">{project.overview ?? project.description}</p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="mt-12">
                  <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Image Gallery</h4>
                  <p className="mt-3 text-white/65 max-w-3xl">A visual walkthrough of the product experience, interface decisions, and execution details.</p>

                  <div className="mt-7 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {project.gallery.map((image, index) => (
                      <motion.button
                        key={`${project.id}-gallery-${index}`}
                        type="button"
                        onClick={() => setLightboxIndex(index)}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                        className="group text-left rounded-[24px] overflow-hidden border border-white/12 bg-white/[0.05] shadow-[0_12px_34px_rgba(0,0,0,0.25)]"
                      >
                        <div className="relative overflow-hidden h-52">
                          <ProjectImage
                            key={image}
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition duration-300" />

                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-semibold text-base translate-y-2 group-hover:translate-y-0 transition duration-300">Screenshot {index + 1}</p>
                          </div>
                        </div>

                        <div className="p-5">
                          <p className="text-white/70 text-sm leading-6">{project.title} visual walkthrough.</p>
                        </div>
                      </motion.button>
                    ))}
                      {/* If this is the ResQRide project, show a demo video card */}
                      {project.id === "resqride" && (
                        <motion.button
                          type="button"
                          onClick={() => setShowVideo(true)}
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 250, damping: 20 }}
                          className="group text-left rounded-[24px] overflow-hidden border border-white/12 bg-white/[0.03] shadow-[0_12px_34px_rgba(0,0,0,0.25)]"
                        >
                          <div className="relative overflow-hidden h-52 bg-slate-800 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="z-10 text-center">
                              <div className="inline-flex items-center justify-center rounded-full w-14 h-14 bg-white/90 text-slate-900 shadow-lg mx-auto">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>
                              </div>
                              <h4 className="mt-3 text-lg font-semibold text-white">Demo Video</h4>
                              <p className="mt-2 text-sm text-white/80">Play the ResQRide walkthrough demo.</p>
                            </div>
                          </div>

                          <div className="p-5">
                            <p className="text-white/70 text-sm leading-6">Short demo of ResQRide features and flows.</p>
                          </div>
                        </motion.button>
                      )}
                  </div>
                </section>

                <section className="mt-14 grid lg:grid-cols-2 gap-10">
                  <div className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 md:p-8">
                    <h4 className="text-white text-2xl font-bold tracking-tight">Project Workflow</h4>
                    <ol className="mt-7 space-y-3">
                      {workflow.map((step, index) => (
                        <li key={step} className="text-white/85">
                          <div className="flex items-start gap-4">
                            <span className="mt-1 inline-flex items-center justify-center rounded-full w-8 h-8 border border-white/25 text-xs font-semibold">
                              {index + 1}
                            </span>

                            <div>
                              <p className="font-semibold text-lg">{step}</p>

                              {index < workflow.length - 1 && (
                                <FiArrowDown className="mt-2 text-white/35" />
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-8">
                    <div className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 md:p-8">
                      <h4 className="text-white text-2xl font-bold tracking-tight">My Contribution</h4>
                      <ul className="mt-5 space-y-2 text-white/75 leading-7 list-disc list-inside">
                        {project.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 md:p-8">
                      <h4 className="text-white text-2xl font-bold tracking-tight">Tech Stack</h4>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={`stack-${tech}`}
                            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {project && lightboxIndex !== null && (
          <Lightbox
            image={project.gallery[lightboxIndex]}
            caption={`${project.title} - Screenshot ${lightboxIndex + 1}`}
            onClose={() => setLightboxIndex(null)}
            onPrev={showPreviousScreenshot}
            onNext={showNextScreenshot}
          />
        )}
      </AnimatePresence>

      {showVideo && (
        <VideoModal
          videoUrl={'/projects/resqride/demo.mp4'}
          driveUrl={'https://drive.google.com/file/d/1pXH_MAdpVYoopcbiVL1Fq-SXfbsSR2xD/view?usp=drive_link'}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
}
