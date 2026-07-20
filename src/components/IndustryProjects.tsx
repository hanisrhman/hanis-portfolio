import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { industryProjects } from "../data/industryProjects";
import type { Project } from "../data/industryProjects";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const CARD_GAP = 24;

export default function IndustryProjects() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  function isInteractiveTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return Boolean(
      target.closest("button, a, input, textarea, select, [data-no-drag]")
    );
  }

  function updateScrollState() {
    const node = carouselRef.current;

    if (!node) {
      return;
    }

    const maxScrollLeft = node.scrollWidth - node.clientWidth;
    setCanScrollLeft(node.scrollLeft > 4);
    setCanScrollRight(node.scrollLeft < maxScrollLeft - 4);
  }

  function scrollByCards(direction: "left" | "right") {
    const node = carouselRef.current;

    if (!node) {
      return;
    }

    const viewportCards = window.matchMedia("(min-width: 1280px)").matches ? 3 : 1;
    const target = Math.max(320, node.clientWidth / viewportCards) + CARD_GAP;
    const offset = direction === "left" ? -target : target;

    node.scrollBy({ left: offset, behavior: "smooth" });
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const node = carouselRef.current;

    if (!node) {
      return;
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      node.scrollBy({ left: event.deltaY, behavior: "smooth" });
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || isInteractiveTarget(event.target)) {
      return;
    }

    const node = carouselRef.current;

    if (!node) {
      return;
    }

    setIsDragging(true);
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = node.scrollLeft;
    node.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    const node = carouselRef.current;

    if (!node) {
      return;
    }

    const delta = event.clientX - dragStartX.current;
    node.scrollLeft = dragStartScrollLeft.current - delta;
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    const node = carouselRef.current;

    if (!node) {
      return;
    }

    setIsDragging(false);

    if (node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
  }

  useEffect(() => {
    const node = carouselRef.current;

    if (!node) {
      return;
    }

    updateScrollState();

    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-20 pt-10 pb-18 md:pt-14 md:pb-22 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Industry Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Industry Projects
          </h2>

          <p className="mt-6 mb-12 text-lg leading-8 text-slate-600">
            Selected projects delivered during internship and industry collaboration, focused on real-world systems, requirements, and product improvements.
          </p>
        </div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05, x: -1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            onClick={() => scrollByCards("left")}
            className="hidden md:inline-flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 border border-slate-200 shadow-lg items-center justify-center text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed"
            disabled={!canScrollLeft}
            type="button"
            aria-label="Scroll industry projects left"
          >
            <FiArrowLeft className="text-lg" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            onClick={() => scrollByCards("right")}
            className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 border border-slate-200 shadow-lg items-center justify-center text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed"
            disabled={!canScrollRight}
            type="button"
            aria-label="Scroll industry projects right"
          >
            <FiArrowRight className="text-lg" />
          </motion.button>

          <motion.div
            animate={{ opacity: canScrollLeft ? 1 : 0 }}
            className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-slate-100 via-slate-100/80 to-transparent"
          />

          <motion.div
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-slate-100 via-slate-100/80 to-transparent"
          />

          <div
            ref={carouselRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`hide-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
          >
            <div className="flex gap-6 items-stretch">
              {industryProjects.map((project) => (
                <div
                  key={project.id}
                  className="snap-start shrink-0 basis-[88%] sm:basis-[74%] lg:basis-[calc((100%-1.5rem)/2)] xl:basis-[calc((100%-3rem)/3)]"
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={setActiveProject}
                  />
                </div>
              ))}
              {/* demo card removed — demos are shown on project details for specific projects */}
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailsModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}