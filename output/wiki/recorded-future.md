# Recorded Future

## Overview
Recorded Future is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Recorded Future is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Recorded Future works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- STIX
- TAXII
- MITRE ATT&CK
- IOC
- ThreatConnect
- Recorded Future
- MISP
- CTI
- NIST CSF
- threat intelligence
- intelligence products
- TLP

## Typical Workflow
- Commercial: Recorded Future, Mandiant Advantage, CrowdStrike Falcon Intelligence
- Government: CISA AIS (Automated Indicator Sharing), FBI InfraGard, MS-ISAC
- OSINT: AlienVault OTX, Abuse.ch, PhishTank, Emerging Threats
- Score each feed on: update frequency, historical accuracy rate, coverage of your sector, and attribution depth. Use a weighted scoring matrix with criteria from NIST SP 800-150 (Guide to Cyber Threat Information Sharing).
- taxii2-client discover https://feed.example.com/taxii/
- taxii2-client get-collection --collection-id <id> --since 2024-01-01
- Query `/v2/indicator/search` with `risk_score_min=65` to filter low-confidence IOCs
- Apply rate limiting and exponential backoff for API resilience
- **Strategic Intelligence Report**: For C-suite, board, risk committee
- Content: Threat landscape trends, adversary intent vs. capability, risk to business objectives

## Use Cases
- Ingesting new commercial or OSINT threat feeds and assessing their signal-to-noise ratio
- Normalizing heterogeneous IOC formats (STIX 2.1, OpenIOC, YARA, Sigma) into a unified schema
- Evaluating feed freshness, fidelity, and relevance to the organization's threat profile
- Building automated enrichment pipelines that correlate IOCs against SIEM events
- Producing weekly, monthly, or quarterly threat intelligence summaries for security leadership
- Creating a rapid intelligence assessment in response to a breaking threat (e.g., new zero-day, active ransomware campaign)
- Generating sector-specific threat briefings for executive decision-making on security investments
- Establishing a formal CTI program and defining its operational model
- Conducting quarterly intelligence requirements reviews with business stakeholders
- Evaluating CTI program maturity against established frameworks (FIRST CTI-SIG maturity model)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, OpenCTI, And Stakeholder Distribution Controls, And Stakeholder Reporting Dashboards, IOC Tables, Microsoft Word, OpenCTI Reports, PIR Tracking

## Sources
- analyzing-threat-intelligence-feeds
- generating-threat-intelligence-reports
- managing-intelligence-lifecycle
