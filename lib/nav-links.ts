export interface NavLink {
  label: string;
  href: string;
}

// Shared between the navbar and the footer's quick links.
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Development", href: "#ai-development" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
