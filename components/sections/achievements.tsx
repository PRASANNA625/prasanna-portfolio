import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  { value: "800+", label: "SharePoint sites migrated to SharePoint Online" },
  { value: "40%", label: "Reduction in approval turnaround time" },
  { value: "35%", label: "Increase in end-user adoption" },
  { value: "25%", label: "Reduction in support requests" },
];

const awards: {
  title: string;
  detail: string;
  org: string;
  icon: typeof Award;
  href?: string;
}[] = [
  {
    title: "Intelligent Applications Builder Associate",
    detail: "Oct 2026",
    org: "Microsoft Certified (AB-410)",
    icon: BadgeCheck,
    href: "https://learn.microsoft.com/en-us/users/prasannabagavathiraja-7959/credentials/certification/intelligent-applications-builder-associate?tab=credentials-tab",
  },
  {
    title: "Star of the Month",
    detail: "July",
    org: "Tata Consultancy Services (TCS)",
    icon: Award,
  },
  {
    title: "Golden Star of the Quarter",
    detail: "Apr–Jun 2023",
    org: "Arus Info Pvt Ltd",
    icon: Award,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Achievements"
            description="Measurable impact, recognition, and certification earned across my Power Platform career."
            className="mb-8"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal
              key={label}
              delay={i * 80}
              className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow"
            >
              <p className="text-4xl font-semibold tracking-tight text-primary">
                {value}
              </p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map(({ title, detail, org, icon: Icon, href }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="relative flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft focus-within:ring-2 focus-within:ring-primary hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold tracking-tight">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:rounded-2xl hover:text-primary focus-visible:outline-none"
                    >
                      {title}
                      <ExternalLink
                        className="ml-1.5 inline h-3.5 w-3.5 align-baseline text-muted"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (verify on Microsoft Learn, opens in a new tab)</span>
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {detail} · {org}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
