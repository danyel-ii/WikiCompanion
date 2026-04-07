# And Stakeholder Reporting Dashboards

## Overview
And Stakeholder Reporting Dashboards is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Stakeholder Reporting Dashboards is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Stakeholder Reporting Dashboards works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- CTI
- intelligence lifecycle
- PIR
- NIST SP 800 150
- threat intelligence program
- NIST CSF
- threat intelligence

## Typical Workflow
- Interview SOC leads, IR team, CISO, risk management, and product security
- Document PIRs in structured format: "What is the current capability and intent of [threat actor] to attack [critical asset] using [technique]?"
- Prioritize 5–10 PIRs for the quarter, reviewed monthly
- Example PIR: "Is ransomware group Cl0p currently targeting organizations in our sector using MoveIT or GoAnywhere vulnerabilities?"
- Technical sources: commercial feeds, TAXII, ISAC data, honeypot telemetry, darkweb monitoring
- Human sources: vendor threat briefings, industry working groups, law enforcement partnerships
- Internal sources: SIEM logs, EDR telemetry, phishing submission mailbox
- Document collection gaps and associated costs to fill them.
- Ingest → normalize to STIX 2.1 → deduplicate → enrich → score confidence

## Use Cases
- Establishing a formal CTI program and defining its operational model
- Conducting quarterly intelligence requirements reviews with business stakeholders
- Evaluating CTI program maturity against established frameworks (FIRST CTI-SIG maturity model)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, OpenCTI, PIR Tracking, Recorded Future, ThreatConnect

## Sources
- managing-intelligence-lifecycle
