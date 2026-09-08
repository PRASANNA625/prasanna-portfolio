import { getYearsSince } from "@/lib/utils";

const careerStartDate = "2019-05-01";
const yearsOfExperience = getYearsSince(careerStartDate);

export const siteConfig = {
  name: "Prasanna B",
  title: "IT Analyst | Power Platform Developer",
  description: `Prasanna B is an IT Analyst and Power Platform Developer with ${yearsOfExperience}+ years of experience building enterprise automation, SharePoint modernization, and low-code solutions — now expanding into modern web development and AI-assisted engineering.`,
  location: "Bangalore, India",
  email: "prasannab625@gmail.com",
  phone: "+91-8680947041",
  linkedinUrl: "https://www.linkedin.com/in/prasanna-b-0869a7223/",
  githubUrl: "https://github.com/PRASANNA625",
  resumeUrl: "/resume.pdf",
  careerStartDate,
  yearsOfExperience,
} as const;
