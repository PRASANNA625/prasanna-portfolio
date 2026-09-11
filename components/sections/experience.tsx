"use client";

import { useState } from "react";
import { Award, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const experience = [
  {
    role: "IT Analyst",
    company: "Tata Consultancy Services (TCS)",
    meta: "Bangalore, India · Client: Northern Trust",
    period: "Sep 2024 – Present",
    highlights: [
      "Leading migration of 800+ SharePoint 2019 on-premises sites to SharePoint Online.",
      "Leading a legacy form modernization initiative, migrating business-critical Nintex Forms and InfoPath applications to Power Apps and Power Automate.",
      "Designed and deployed automated approval workflows, reducing approval turnaround time by 40%.",
      "Built responsive, device-friendly Power Apps solutions that increased end-user adoption by 35%.",
      "Implemented security roles, DLP policies, and environment strategies to ensure regulatory compliance.",
      "Conducted knowledge-transfer training for business and IT teams, reducing support requests by 25%.",
    ],
  },
  {
    role: "Power Platform Engineer",
    company: "Neo Technologies",
    meta: null,
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Designed and developed Power Apps and Power Automate solutions to streamline internal business processes.",
    ],
  },
  {
    role: "Power Platform Engineer",
    company: "Arus Info Pvt Ltd",
    meta: "Global clients: GLP (Singapore), Plaeto (India), National University of Singapore, Brand's (New Zealand)",
    period: "Jan 2022 – Jun 2024",
    highlights: [
      "Built a Gmail automation solution (Plaeto, India) using Power Automate, REST APIs, and Azure Blob Storage, backed by SQL Server.",
      "Developed the EDL Data Refresh Application (GLP, Singapore) for triggering Azure Pipelines via Power Automate, with role-based access control.",
      "Designed a Data Dictionary Application (GLP, Singapore) with incremental data load via API integration, preserving full data history.",
      "Created an Application Access Ticketing System (GLP, Singapore) supporting multi-level approvals across multiple systems.",
      "Automated invoice processing for the Arus Finance Application using Power Apps, Power Automate, and AI Builder, including PDF data extraction.",
      "Built Power BI dashboards for Arus Finance and Brand's (New Zealand) e-commerce, covering P&L, income, sales, and margin analysis.",
      "Developed the NUS Student Application (Singapore), automating graduation letters, unpaid-fee notices, and achievement letters.",
      "Deployed Power Apps solutions via Azure DevOps CI/CD pipelines.",
    ],
    award: "Golden Star of the Quarter (Apr–Jun 2023)",
  },
  {
    role: "Transaction Process Associate",
    company: "Accenture Pvt Ltd",
    meta: null,
    period: "May 2019 – Dec 2021",
    highlights: [],
  },
];

export function Experience() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description={`${siteConfig.yearsOfExperience}+ years building enterprise automation and low-code solutions across Power Platform and SharePoint.`}
          />
        </Reveal>

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => {
            const isOpen = openIndexes.has(i);
            const hasDetails = item.highlights.length > 0 || Boolean(item.award);
            const panelId = `experience-panel-${i}`;

            return (
              <div
                key={`${item.company}-${item.period}`}
                className={i === experience.length - 1 ? "" : "pb-12"}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"
                />

                <Reveal>
                  <p className="mb-1 font-mono text-sm text-accent">
                    {item.period}
                  </p>

                  {hasDetails ? (
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group -ml-1 flex items-center gap-2 rounded-md py-1 pl-1 pr-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <h3 className="text-xl font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.role}
                    </h3>
                  )}

                  <p className="mt-1 text-base font-medium text-foreground">
                    {item.company}
                  </p>
                  {item.meta && (
                    <p className="mt-1 text-sm text-muted">{item.meta}</p>
                  )}

                  {hasDetails && (
                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.highlights.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {item.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted"
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.award && (
                          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground shadow-soft transition-shadow hover:shadow-glow">
                            <Award
                              className="h-4 w-4 text-accent"
                              aria-hidden="true"
                            />
                            {item.award}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
