import {
  Boxes,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
  {
    icon: Boxes,
    title: "Power Platform",
    skills: ["Power Apps", "Power Automate", "Power BI", "Power Pages"],
  },
  {
    icon: LayoutGrid,
    title: "SharePoint & Collaboration",
    skills: [
      "SharePoint Online",
      "SharePoint On-Premises",
      "Nintex Forms",
      "InfoPath",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Automation & Governance",
    skills: [
      "Process Automation",
      "Security & Governance",
      "Workflow Design",
      "Stakeholder Collaboration",
    ],
  },
  {
    icon: Sparkles,
    title: "Modern Web & AI-Assisted Dev",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Toolbox"
            title="Skills"
            description="A blend of enterprise low-code expertise and modern, AI-assisted software development."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ icon: Icon, title, skills }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
