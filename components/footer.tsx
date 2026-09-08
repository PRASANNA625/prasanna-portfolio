import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <a
            href="#top"
            className="rounded-md font-mono text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </a>
          <p className="mt-1 text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
