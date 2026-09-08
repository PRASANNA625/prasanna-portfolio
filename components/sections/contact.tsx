import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          description="Open to Power Platform opportunities and conversations about modern, AI-assisted web development."
          align="center"
        />

        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 shadow-soft sm:p-10">
          <ul className="space-y-5">
            {contactMethods.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="rounded-sm text-base font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-foreground">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <Button href={`mailto:${siteConfig.email}`} size="lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
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
          </div>
        </div>
      </Container>
    </section>
  );
}
