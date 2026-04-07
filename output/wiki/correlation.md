# Correlation

## Overview
Correlation is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Correlation is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Correlation works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- threat intelligence
- stix
- taxii
- misp
- feeds
- ioc
- siem integration
- soc operations
- incident triage
- NIST 800 61
- SANS PICERL

## Typical Workflow
- | Feed Source | Format | IOC Types | Update Freq | Cost |
- |-------------|--------|-----------|-------------|------|
- | AlienVault OTX | STIX/JSON | IP, Domain, Hash, URL | Real-time | Free |
- | Abuse.ch URLhaus | CSV/JSON | URL, Domain | Every 5 min | Free |
- | Abuse.ch MalwareBazaar | JSON API | File Hash | Real-time | Free |
- | CISA AIS | STIX/TAXII 2.1 | All types | Daily | Free (US Gov) |
- | CrowdStrike Intel | STIX/JSON | All types + Actor TTP | Real-time | Commercial |
- | Mandiant Advantage | STIX 2.1 | All types + Reports | Real-time | Commercial |
- from taxii2client.v21 import Server, Collection
- **Alert source**: Which detection system generated the alert (EDR, SIEM, IDS/IPS, firewall, user report)

## Use Cases
- SOC teams need automated ingestion of threat intelligence feeds into SIEM platforms
- Multiple TI sources require normalization into a common format (STIX 2.1)
- Detection systems need real-time IOC matching against network and endpoint telemetry
- TI feed quality assessment and deduplication processes need to be established
- **New Feed Onboarding**: Evaluate feed quality, map fields to STIX, configure automated ingestion pipeline
- **Multi-SIEM Distribution**: Push normalized IOCs from MISP to Splunk, Elastic, and Sentinel simultaneously
- **False Positive Reduction**: Score IOCs by source count and age, expire stale indicators automatically
- **Feed Quality Audit**: Compare detection match rates across feeds to identify highest-value sources
- **Incident IOC Sharing**: Package investigation IOCs as STIX bundle and share with ISACs via TAXII
- A SIEM or EDR alert fires and requires human classification before escalation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, Abuse.ch, AlienVault OTX, And One Click Host Containment, And Sharing, And Team Collaboration, And Triage Workflow Management, Cortex XSOAR

## Sources
- building-threat-intelligence-feed-integration
- triaging-security-incident
