import { projectAssets } from "./projectAssets";

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  cover: string;
  gallery: string[];
  description: string;
  overview?: string;
  technologies: string[];
  contributions: string[];
  workflow?: string[];
}

export const industryProjects: Project[] = [
  {
    id: "cms-secure",
    title: "CMS Secure",
    category: "Industry Project",
    thumbnail: projectAssets.cmsSecure.thumbnail,
    cover: projectAssets.cmsSecure.cover,
    gallery: projectAssets.cmsSecure.gallery,
    description:
      "A centralized security monitoring platform for managing CCTV cameras, drones, access doors, alerts, and building devices.",
    overview:
      "CMS Secure unifies security operations into one dashboard so teams can monitor, respond, and control building systems in real time.",
    technologies: ["React", "TypeScript", "LoopBack", "REST API", "Figma"],
    contributions: [
      "Developed Building Device Management module",
      "Developed Alert module",
      "Developed Manage Device module",
      "Integrated REST APIs",
      "Improved UI/UX",
      "Bug fixing",
      "Code refactoring"
    ]
  },
  {
    id: "hr-payroll",
    title: "HR Payroll System",
    category: "Industry Project",
    thumbnail: projectAssets.hrPayroll.thumbnail,
    cover: projectAssets.hrPayroll.cover,
    gallery: projectAssets.hrPayroll.gallery,
    description:
      "Human Resource and Payroll Management System used to manage employee payroll and HR processes.",
    overview:
      "A process-focused payroll and HR platform that improves clarity across claims, requirements, and employee operations.",
    technologies: ["Docmost", "Figma", "Canva"],
    contributions: [
      "Prepared Product Requirement Documentation",
      "Created User Manual",
      "Designed Claim Management Wireframes",
      "Prepared Acceptance Criteria",
      "Prepared Gherkin Scenarios"
    ]
  },
  {
    id: "cms-gep",
    title: "CMS GEP",
    category: "Industry Project",
    thumbnail: projectAssets.cmsGep.thumbnail,
    cover: projectAssets.cmsGep.cover,
    gallery: projectAssets.cmsGep.gallery,
    description:
      "Requirement analysis and dashboard enhancement project for GuardExpert Pro.",
    overview:
      "CMS GEP focused on requirement discovery and dashboard direction to improve decision-making for operations teams.",
    technologies: ["Figma", "Requirement Engineering"],
    contributions: [
      "Requirement Gathering",
      "Dashboard Wireframe",
      "Client Discussion",
      "Documentation"
    ]
  },
  {
    id: "jaga-drone",
    title: "Jaga Drone",
    category: "Industry Project",
    thumbnail: projectAssets.jagaDrone.thumbnail,
    cover: projectAssets.jagaDrone.cover,
    gallery: projectAssets.jagaDrone.gallery,
    description:
      "Documentation project for drone monitoring and mission planning.",
    overview:
      "Jaga Drone streamlined technical communication across mission planning, authentication, and dashboard operations.",
    technologies: ["Docmost", "Figma"],
    contributions: [
      "Mission Planner Documentation",
      "Dashboard Documentation",
      "Authentication Documentation",
      "Asset Management Documentation"
    ]
  },
  {
    id: "ai-waterpump",
    title: "AI Water Pump Failure Detection",
    category: "AI Project",
    thumbnail: projectAssets.aiWaterpump.thumbnail,
    cover: projectAssets.aiWaterpump.cover,
    gallery: projectAssets.aiWaterpump.gallery,
    description:
      "AI-based object detection system using YOLOv8 to detect water pump failures.",
    overview:
      "An applied AI workflow from dataset curation to edge deployment for real-time water pump failure detection.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Raspberry Pi"],
    contributions: [
      "Dataset Annotation",
      "YOLOv8 Training",
      "ROI Detection",
      "Model Comparison",
      "Deployment on Raspberry Pi"
    ]
  }
];