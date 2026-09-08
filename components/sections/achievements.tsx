import { Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  { value: "800+", label: "SharePoint sites migrated to SharePoint Online" },
  { value: "40%", label: "Reduction in approval turnaround time" },
  { value: "35%", label: "Increase in end-user adoption" },
  { value: "25%", label: "Reduction in support requests" },
];

const awards = [
  {
    title: "Star of the Month",
    detail: "July",
    org: "Tata Consultancy Services (TCS)",
  },
  {
    title: "Golden Star of the Quarter",
    detail: "Apr–Jun 2023",
    org: "Arus Info Pvt Ltd",
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
            description="Measurable impact and recognition earned across my Power Platform engagements."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal
              key={label}
              delay={i * 80}
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
            >
              <p className="text-4xl font-semibold tracking-tight text-primary">
                {value}
              </p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {awards.map(({ title, detail, org }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {title}
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
