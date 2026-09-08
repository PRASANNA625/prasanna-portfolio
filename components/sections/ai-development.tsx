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
            className="rounded-2xl border border-border bg-surface p-8 shadow-soft"
          >
            <p className="text-sm font-medium text-foreground">
              How I use it
            </p>

            <ul className="mt-6 space-y-5 border-t border-border pt-6">
              {workflow.map(({ icon: Icon, label }) => (
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
