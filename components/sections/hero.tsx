import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <Container className="relative py-20">
        <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-soft">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.location}
        </div>

        <h1 className="mb-4 max-w-3xl animate-fade-up text-5xl font-semibold tracking-tight [animation-delay:100ms] sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        <p className="mb-6 animate-fade-up font-mono text-lg text-accent [animation-delay:200ms] sm:text-2xl">
          {siteConfig.title}
        </p>

        <p className="mb-10 max-w-2xl animate-fade-up text-base leading-relaxed text-muted [animation-delay:300ms] sm:text-lg">
          I design and deliver enterprise automation and low-code solutions
          across Microsoft Power Platform — Power Apps, Power Automate,
          SharePoint, and Power BI — backed by {siteConfig.yearsOfExperience}+
          years of professional experience. Alongside that, I&apos;m
          expanding into modern web and mobile development, using
          AI-assisted tools like Claude Code to build, debug, and ship
          faster.
        </p>

        <div className="flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:400ms]">
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
      </Container>
    </section>
  );
}
