# Opencti

## Overview
Opencti is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Opencti is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Opencti works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

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
- mitre attack
- opencti

## Typical Workflow
- Commercial: Recorded Future, Mandiant Advantage, CrowdStrike Falcon Intelligence
- Government: CISA AIS (Automated Indicator Sharing), FBI InfraGard, MS-ISAC
- OSINT: AlienVault OTX, Abuse.ch, PhishTank, Emerging Threats
- Score each feed on: update frequency, historical accuracy rate, coverage of your sector, and attribution depth. Use a weighted scoring matrix with criteria from NIST SP 800-150 (Guide to Cyber Threat Information Sharing).
- taxii2-client discover https://feed.example.com/taxii/
- taxii2-client get-collection --collection-id <id> --since 2024-01-01
- Query `/v2/indicator/search` with `risk_score_min=65` to filter low-confidence IOCs
- Apply rate limiting and exponential backoff for API resilience
- image: opencti/platform:6.4.4
- APP__ADMIN__EMAIL=admin@opencti.io

## Use Cases
- Ingesting new commercial or OSINT threat feeds and assessing their signal-to-noise ratio
- Normalizing heterogeneous IOC formats (STIX 2.1, OpenIOC, YARA, Sigma) into a unified schema
- Evaluating feed freshness, fidelity, and relevance to the organization's threat profile
- Building automated enrichment pipelines that correlate IOCs against SIEM events
- When deploying or configuring building ioc enrichment pipeline with opencti capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation
- SOC teams need automated ingestion of threat intelligence feeds into SIEM platforms
- Multiple TI sources require normalization into a common format (STIX 2.1)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, Recorded Future, Taxii2 Client, ThreatConnect, Abuse.ch, AlienVault OTX, And Campaign Analysis, And Campaign Linkages

## Sources
- analyzing-threat-intelligence-feeds
- building-ioc-enrichment-pipeline-with-opencti
- building-threat-intelligence-feed-integration
- collecting-indicators-of-compromise
- evaluating-threat-intelligence-platforms
- managing-intelligence-lifecycle
- processing-stix-taxii-feeds
- profiling-threat-actor-groups
