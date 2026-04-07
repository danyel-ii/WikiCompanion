# Threatconnect

## Overview
Threatconnect is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Threatconnect is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Threatconnect works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- TIP
- ThreatConnect
- MISP
- OpenCTI
- Anomali
- EclecticIQ
- STIX TAXII
- CTI program
- procurement
- threat intelligence
- CTI
- intelligence lifecycle

## Typical Workflow
- M: STIX 2.1 import/export with TAXII 2.1 server
- M: REST API for automated IOC ingestion and export
- M: Indicator deduplication and TTL management
- M: TLP classification enforcement
- D: Built-in MITRE ATT&CK integration and technique tagging
- D: Graph visualization of indicator relationships
- D: Workflow automation for analyst triage
- M: SIEM integration (Splunk, Sentinel, QRadar) via syslog, API, or native connector
- M: EDR integration for IOC push (CrowdStrike, Defender, SentinelOne)
- Interview SOC leads, IR team, CISO, risk management, and product security

## Use Cases
- Conducting a formal RFP or vendor evaluation for a TIP solution
- Assessing whether the current TIP (e.g., MISP) needs to be replaced or augmented as the CTI program scales
- Establishing evaluation criteria aligned to organizational maturity and budget
- Establishing a formal CTI program and defining its operational model
- Conducting quarterly intelligence requirements reviews with business stakeholders
- Evaluating CTI program maturity against established frameworks (FIRST CTI-SIG maturity model)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, OpenCTI, And Stakeholder Reporting Dashboards, Anomali ThreatStream, EclecticIQ, PIR Tracking, Recorded Future

## Sources
- evaluating-threat-intelligence-platforms
- managing-intelligence-lifecycle
