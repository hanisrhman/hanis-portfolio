export interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    date: "March 2026",
    title: "Assistant Software Engineer Intern",
    company: "Secure LabX Sdn. Bhd.",
    location: "Selangor, Malaysia",
    description:
      "Started my internship by developing an AI-based water pump failure detection system using computer vision technologies.",
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Roboflow",
      "Google Colab",
      "Raspberry Pi",
    ],
  },

  {
    id: 2,
    date: "April 2026",
    title: "HR & Payroll System",
    company: "Secure LabX Sdn. Bhd.",
    location: "Documentation & UI/UX",
    description:
      "Prepared Product Requirement Documents (PRD), User Manuals, and wireframes for HR Payroll modules.",
    technologies: [
      "Docmost",
      "Figma",
      "Canva",
    ],
  },

  {
    id: 3,
    date: "May 2026",
    title: "CMS GEP",
    company: "GuardExpert Pro",
    location: "Requirement Analysis",
    description:
      "Conducted requirement gathering and dashboard enhancement planning.",
    technologies: [
      "Requirement Analysis",
      "Figma",
      "Documentation",
    ],
  },

  {
    id: 4,
    date: "June 2026",
    title: "CMS Secure",
    company: "Secure LabX Sdn. Bhd.",
    location: "Frontend Development",
    description:
      "Developed React frontend modules, integrated REST APIs, and improved UI/UX.",
    technologies: [
      "React",
      "TypeScript",
      "REST API",
      "LoopBack",
      "Git",
    ],
  },

  {
    id: 5,
    date: "July 2026",
    title: "Internship Completed",
    company: "Secure LabX Sdn. Bhd.",
    location: "Industrial Training",
    description:
      "Successfully completed the internship after contributing to enterprise software projects.",
    technologies: [
      "Software Engineering",
      "Teamwork",
      "Documentation",
    ],
  },
];