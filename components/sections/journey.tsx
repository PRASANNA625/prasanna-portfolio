import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const milestones = [
  {
    number: "01",
    title: "The Beginning",
    description:
      "Worked different jobs during college while supporting my education.",
  },
  {
    number: "02",
    title: "First Graduate",
    description:
      "Became the first graduate in my family and completed my degree with my own earnings.",
  },
  {
    number: "03",
    title: "The IT Dream",
    description: "Moved to Bangalore with one ambition — to build a career in IT.",
  },
  {
    number: "04",
    title: "The First Step",
    description:
      "Started at Accenture in a non-IT, non-voice role and gained valuable corporate experience.",
  },
  {
    number: "05",
    title: "The Turning Point",
    description:
      "Joined Arus Info as an intern, learned Power BI, and transitioned into a full-time Power Platform Engineer role.",
  },
  {
    number: "06",
    title: "Self-Made Learning",
    description:
      "Built my Power Platform skills largely through self-learning and practice, while also mentoring junior team members.",
  },
  {
    number: "07",
    title: "Keep Moving",
    description:
      "After an unexpected startup layoff, I joined TCS and continue to grow while exploring modern web, mobile, and AI-assisted development.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="My Story"
            title="My Journey"
            description="From different beginnings to building a career in technology."
          />
        </Reveal>

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {milestones.map((item, i) => (
            <div
              key={item.number}
              className={i === milestones.length - 1 ? "" : "pb-10"}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-medium text-accent shadow-[0_0_16px_-6px_var(--primary)]"
              >
                {item.number}
              </span>

              <Reveal delay={i * 60} className="pl-2">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-24">
            <p
              className="bg-gradient-to-r from-primary via-accent to-accent-magenta bg-clip-text text-2xl font-semibold leading-snug tracking-tight text-transparent sm:text-3xl md:text-4xl"
              style={{ textShadow: "0 0 48px rgb(139 92 246 / 0.35)" }}
            >
              &ldquo;I didn&apos;t have the roadmap. I built one along the
              way.&rdquo;
            </p>
            <p className="mt-5 font-mono text-sm text-muted">— Prasanna B</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
