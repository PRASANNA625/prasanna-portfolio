import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const swatches = [
  { name: "Background", className: "bg-background border border-border" },
  { name: "Surface", className: "bg-surface border border-border" },
  { name: "Primary", className: "bg-primary" },
  { name: "Accent", className: "bg-accent" },
  { name: "Muted", className: "bg-muted" },
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24">
        <p className="mb-4 font-mono text-sm text-accent">Foundation ready</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mb-12 max-w-xl text-lg text-muted">
          {siteConfig.title} — project scaffold and design tokens are live.
          Sections will be built one at a time.
        </p>

        <div className="mb-16 flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {swatches.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-16 rounded-lg shadow-soft ${s.className}`} />
              <p className="font-mono text-xs text-muted">{s.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
