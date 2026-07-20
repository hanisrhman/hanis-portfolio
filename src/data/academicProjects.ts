import type { Project } from "./industryProjects";
import { projectAssets } from "./projectAssets";

export const academicProjects: Project[] = [
  {
    id: "resqride",
    title: "ResQRide",
    category: "Final Year Project",
    thumbnail: projectAssets.resqride.thumbnail,
    cover: projectAssets.resqride.cover,
    gallery: projectAssets.resqride.gallery,
    description:
      "A mobile application that helps motorcyclists request emergency roadside assistance and locate nearby workshops using GPS navigation.",
    overview:
      "ResQRide improves rider safety by connecting emergency support, workshop discovery, and route guidance in one mobile flow.",
    technologies: ["Android Studio", "Java", "Firebase", "Google Maps API"],
    contributions: [
      "Designed and implemented key mobile app flows",
      "Integrated map navigation and workshop location features",
      "Connected real-time support requests with Firebase backend"
    ]
  },
  {
    id: "robe-system",
    title: "UiTM Convocation Attire Reservation System",
    category: "Web Application",
    thumbnail: projectAssets.robeSystem.thumbnail,
    cover: projectAssets.robeSystem.cover,
    gallery: projectAssets.robeSystem.gallery,
    description:
      "A web-based reservation system for managing graduation attire bookings for UiTM students.",
    overview:
      "This system streamlines booking windows, inventory visibility, and reservation status tracking for graduating students.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    contributions: [
      "Built reservation workflows for attire booking and status tracking",
      "Implemented data models and CRUD modules for reservation records",
      "Improved front-end usability for student booking steps"
    ]
  },
  {
    id: "petresq",
    title: "PetResQ",
    category: "Mobile Application",
    thumbnail: projectAssets.petresq.thumbnail,
    cover: projectAssets.petresq.cover,
    gallery: projectAssets.petresq.gallery,
    description:
      "A mobile application that allows users to report, search, and locate lost pets using maps and Firebase.",
    overview:
      "PetResQ helps owners and volunteers collaborate quickly by sharing sightings, reports, and map-based pet locations.",
    technologies: ["Android Studio", "Firebase", "Google Maps API", "Java"],
    contributions: [
      "Built lost-pet reporting and search features",
      "Integrated Firebase for real-time updates",
      "Implemented map markers and location-based discovery"
    ]
  }
];
