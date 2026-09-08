import {
  BarChart3,
  Mail,
  Receipt,
  RefreshCw,
  Ticket,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    icon: RefreshCw,
    title: "SharePoint Modernization at Scale",
    client: "TCS · Northern Trust",
    description:
      "Leading the migration of 800+ SharePoint 2019 on-premises sites to SharePoint Online, alongside modernizing business-critical Nintex Forms and InfoPath applications onto Power Apps and Power Automate.",
    tech: ["SharePoint Online", "SharePoint 2019", "Power Apps", "Power Automate"],
  },
  {
    icon: Workflow,
    title: "EDL Data Refresh Application",
    client: "GLP · Singapore",
    description:
      "A Power Apps tool for manually triggering Azure Pipelines via Power Automate, with role-based access control for controlled, on-demand data refreshes.",
    tech: ["Power Apps", "Power Automate", "Azure Pipelines", "RBAC"],
  },
  {
    icon: Ticket,
    title: "Application Access Ticketing System",
    client: "GLP · Singapore",
    description:
      "A ticketing system supporting multi-level approvals across multiple systems, streamlining how application access requests are raised, reviewed, and approved.",
    tech: ["Power Apps", "Power Automate", "Dataverse"],
  },
  {
    icon: Mail,
    title: "Gmail Automation Solution",
    client: "Plaeto · India",
    description:
      "An end-to-end automation for managing email attachments and URL data using Power Automate and REST APIs, backed by SQL Server and Azure Blob Storage.",
    tech: ["Power Automate", "REST APIs", "Azure Blob Storage", "SQL Server"],
  },
  {
    icon: Receipt,
    title: "Automated Invoice Processing",
    client: "Arus Finance",
    description:
      "Automated invoice processing with PDF data extraction and email-based approval workflows, cutting manual effort in the finance team's invoicing pipeline.",
    tech: ["Power Apps", "Power Automate", "AI Builder"],
  },
  {
    icon: BarChart3,
    title: "Power BI Analytics Dashboards",
    client: "Arus Finance · Brand's (New Zealand)",
    description:
      "Dashboards covering P&L, income performance, sales, and margin analysis for finance and e-commerce operations.",
    tech: ["Power BI"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            description="A sample of enterprise Power Platform solutions delivered for global clients."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, client, description, tech }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">{client}</p>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
