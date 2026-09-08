import { Building2, RefreshCw, Sparkles, Users, Workflow, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: Building2,
    label: "Enterprise Application Development",
  },
  {
    icon: Workflow,
    label: "Power Platform Solutions",
  },
  {
    icon: RefreshCw,
    label: "SharePoint Modernization",
  },
  {
    icon: Zap,
    label: "Process Automation",
  },
  {
    icon: Users,
    label: "Cross-Functional Collaboration",
  },
  {
    icon: Sparkles,
    label: "Expanding into Modern, AI-Assisted Development",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <SectionHeading eyebrow="Introduction" title="About Me" />

            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m a Power Platform Engineer with 5.5+ years of
                experience designing and delivering enterprise automation and
                low-code solutions across SharePoint, Power Apps, Power
                Automate, and Power BI. My work spans modernizing legacy
                SharePoint, Nintex Forms, and InfoPath systems onto the
                Microsoft Power Platform — including a large-scale migration
                of 800+ SharePoint 2019 on-premises sites to SharePoint
                Online.
              </p>
              <p>
                Along the way, I&apos;ve improved approval processes,
                increased end-user adoption, and implemented security and
                governance across environments — while collaborating closely
                with cross-functional and global stakeholders. Outside of my
                core Power Platform work, I&apos;m expanding into modern web
                and mobile development, using AI-assisted tools to learn
                faster and build more.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 shadow-soft">
            <p className="text-5xl font-semibold tracking-tight text-primary">
              5.5+
            </p>
            <p className="mt-1 text-sm text-muted">
              Years of Professional Experience
            </p>

            <ul className="mt-8 space-y-5 border-t border-border pt-8">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground sm:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
