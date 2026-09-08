import {
  Bug,
  Code2,
  LayoutPanelLeft,
  Search,
  RefreshCw,
  TestTube2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const workflow = [
  { icon: Code2, label: "Code generation" },
  { icon: LayoutPanelLeft, label: "UI implementation" },
  { icon: Bug, label: "Debugging" },
  { icon: RefreshCw, label: "Refactoring" },
  { icon: Search, label: "Code analysis" },
  { icon: TestTube2, label: "Testing & refinement" },
];

export function AiDevelopment() {
  return (
    <section id="ai-development" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="AI-Assisted Development"
              title="Building with Claude Code"
            />

            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Alongside my Power Platform work, I&apos;m expanding into
                modern web and mobile development using Claude Code and
                Claude Skills as day-to-day development tools. They help me
                move faster through code generation, UI implementation, and
                debugging, while I stay in control of engineering decisions,
                architecture, and code quality.
              </p>
              <p>
                This portfolio itself is a working example — built
                incrementally with Claude Code, section by section, with
                each step reviewed, tested, and verified before moving to the
                next.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="rounded-2xl border border-border bg-surface p-8 shadow-soft hover:-translate-y-1 hover:shadow-glow"
          >
            <p className="text-sm font-medium text-foreground">
              How I use it
            </p>

            <ul className="mt-6 space-y-4 border-t border-border pt-6">
              {workflow.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-[0_0_16px_-6px_var(--primary)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-foreground sm:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
