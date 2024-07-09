import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import InquiryForm from "@/public/InquiryForm.png";
import apptemplatesImg from "@/public/apptemplates.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Thapar University",
    location: "Patiala, PB",
    description:
      "Graduated in B.E. Program as Electrical and Computer Engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Associate Software Developer",
    location: "Noida, UP",
    description:
      "Worked as a Associate Software Developer Intern for 6 months at VirtuBox InfoTech Pvt. Ltd. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Inquiry Form at Virtubox.io",
    description:
      "I worked as a full-stack developer on this project. Users can inquire about business related queries using this.",
    tags: ["HTML", "CSS", "JavaScript", "Bootsrap","MySql"],
    imageUrl: InquiryForm,
  },
  {
    title: "App Templates on VirtuBox.io",
    description:
      "Produced a comprehensive UI/UX design for company's no-code platform, effectively presenting over 100 app templates.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: apptemplatesImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootsrap",
  "MongoDB",
  "Redux",
  "jQuery",

  "Express",
  "SQL",
  "Python",

  "Framer Motion",
] as const;
