export interface NavLink {
  label: string;
  href: string;
}

// Shared between the navbar and the footer's quick links.
export const navLinks: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Development", href: "#ai-development" },
  { label: "Achievements", href: "#achievements" },
  { label: "My Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
