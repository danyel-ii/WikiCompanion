# Misp

## Overview
Misp is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Misp is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Misp works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- **MISP Feeds**: Native JSON/CSV feeds from MISP community (CIRCL OSINT, botvrij.eu)
- **Freetext Feeds**: Unstructured text feeds parsed for IOCs (abuse.ch, Feodo Tracker)
- **TAXII Feeds**: STIX/TAXII 2.1 compatible feeds from commercial and government sources
- **CSV Feeds**: Structured CSV feeds with configurable column mapping

## Typical Workflow
- **Phase 1 - Reconnaissance**: Adversary gathers target information before attack.
- **Phase 2 - Weaponization**: Adversary creates attack tool (malware + exploit).
- **Phase 3 - Delivery**: Adversary transmits weapon to target.
- **Phase 4 - Exploitation**: Adversary exploits vulnerability to execute code.
- **Phase 5 - Installation**: Adversary establishes persistence on target.
- **Phase 6 - Command & Control (C2)**: Adversary communicates with compromised system.
- Commercial: Recorded Future, Mandiant Advantage, CrowdStrike Falcon Intelligence
- Government: CISA AIS (Automated Indicator Sharing), FBI InfraGard, MS-ISAC
- OSINT: AlienVault OTX, Abuse.ch, PhishTank, Emerging Threats
- Score each feed on: update frequency, historical accuracy rate, coverage of your sector, and attribution depth. Use a weighted scoring matrix with criteria from NIST SP 800-150 (Guide to Cyber Threat Information Sharing).

## Use Cases
- Conducting post-incident analysis to determine how far an adversary progressed through an attack sequence
- Designing layered defensive controls with the goal of interrupting attacks at the earliest possible phase
- Producing threat intelligence reports that communicate attack progression to non-technical stakeholders
- Ingesting new commercial or OSINT threat feeds and assessing their signal-to-noise ratio
- Normalizing heterogeneous IOC formats (STIX 2.1, OpenIOC, YARA, Sigma) into a unified schema
- Evaluating feed freshness, fidelity, and relevance to the organization's threat profile
- Building automated enrichment pipelines that correlate IOCs against SIEM events
- When investigating security incidents that require analyzing threat landscape with misp
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- OpenCTI, Correlation, Cortex XSOAR, CyberChef, Recorded Future, Taxii2 Client, ThreatConnect, VirusTotal

## Sources
- analyzing-cyber-kill-chain
- analyzing-threat-intelligence-feeds
- analyzing-threat-landscape-with-misp
- automating-ioc-enrichment
- building-threat-feed-aggregation-with-misp
- building-threat-intelligence-feed-integration
- collecting-indicators-of-compromise
- collecting-threat-intelligence-with-misp
- evaluating-threat-intelligence-platforms
- extracting-iocs-from-malware-samples
- managing-intelligence-lifecycle
- performing-threat-intelligence-sharing-with-misp
- processing-stix-taxii-feeds
- triaging-security-incident
