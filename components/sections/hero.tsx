import {
  ArrowRight,
  AppWindow,
  BarChart3,
  Code2,
  Download,
  Mail,
  MapPin,
  Share2,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.linkedinUrl },
  { icon: GithubIcon, label: "GitHub", href: siteConfig.githubUrl },
];

const techBadges = [
  {
    icon: AppWindow,
    label: "Power Apps",
    position: "top-0 left-2 sm:left-6",
  },
  {
    icon: BarChart3,
    label: "Power BI",
    position: "top-0 right-2 sm:right-6",
  },
  {
    icon: Workflow,
    label: "Power Automate",
    position: "top-1/2 -left-3 -translate-y-1/2 sm:-left-6",
  },
  {
    icon: Share2,
    label: "SharePoint",
    position: "top-1/2 -right-3 -translate-y-1/2 sm:-right-6",
  },
  {
    icon: Terminal,
    label: "Claude Code",
    position: "bottom-0 left-2 sm:left-6",
  },
  {
    icon: Code2,
    label: "Web & Mobile",
    position: "bottom-0 right-2 sm:right-6",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 animate-aurora-a rounded-full bg-primary/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 animate-aurora-b rounded-full bg-accent/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 animate-aurora-c rounded-full bg-accent-magenta/15 blur-[110px]"
      />

      <Container className="relative py-20">
        <div className="grid gap-12 xl:grid-cols-[5fr_3fr] xl:items-center xl:gap-16">
          <div>
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-soft">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.location}
            </div>

            <h1 className="mb-4 max-w-3xl animate-fade-up text-5xl font-semibold tracking-tight [animation-delay:100ms] sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-accent-magenta bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>

            <p className="mb-6 animate-fade-up font-mono text-lg text-accent [animation-delay:200ms] sm:text-2xl dark:[text-shadow:0_0_20px_rgb(167_139_250_/_0.35)]">
              {siteConfig.title}
            </p>

            <p className="mb-10 max-w-2xl animate-fade-up text-base leading-relaxed text-muted [animation-delay:300ms] sm:text-lg">
              I design and deliver enterprise automation and low-code
              solutions across Microsoft Power Platform — Power Apps, Power
              Automate, SharePoint, and Power BI — backed by{" "}
              {siteConfig.yearsOfExperience}+ years of professional
              experience. Alongside that, I&apos;m expanding into modern web
              and mobile development, using AI-assisted tools like Claude
              Code to build, debug, and ship faster.
            </p>

            <div className="mb-8 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:400ms]">
              <Button href="#projects" size="lg">
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                download
                variant="secondary"
                size="lg"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </Button>
            </div>

            <div className="flex animate-fade-up items-center gap-3 [animation-delay:500ms]">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition-[border-color,box-shadow,color] hover:border-primary/60 hover:text-primary hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex xl:items-center xl:justify-center">
            <div className="relative aspect-square w-full max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute inset-[8%] rounded-full border border-primary/15"
              />
              <div className="absolute inset-[16%] flex flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-surface to-background/80 shadow-glow backdrop-blur-sm">
                <Sparkles className="h-9 w-9 text-primary" aria-hidden="true" />
                <p className="text-center font-mono text-xs leading-relaxed text-muted sm:text-sm">
                  BUILD
                  <br />
                  AUTOMATE
                  <br />
                  INNOVATE
                </p>
              </div>

              {techBadges.map(({ icon: Icon, label, position }, i) => (
                <div
                  key={label}
                  className={`absolute ${position} flex w-20 animate-float flex-col items-center gap-1.5 rounded-xl border border-border bg-surface p-2.5 text-center shadow-soft sm:w-24`}
                  style={{
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `${5 + i * 0.6}s`,
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-medium text-foreground sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
