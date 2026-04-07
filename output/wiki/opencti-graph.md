# Opencti Graph

## Overview
Opencti Graph is a campaign analysis tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Opencti Graph is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Opencti Graph works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- campaign analysis
- correlation
- MISP
- ATT&CK
- threat actor
- intrusion set
- clustering
- CTI
- threat intelligence

## Typical Workflow
- Internal SIEM (raw events, alert history)
- TIP (historical indicators and events)
- ISAC sharing (partner-submitted events in MISP or TAXII)
- Commercial intelligence (Recorded Future, Mandiant, CrowdStrike reports)
- Normalize all events to STIX 2.1 schema with consistent timestamp (UTC), indicator types, and confidence scores. Ensure all indicators have source attribution and collection date.
- Same IP address or /24 subnet across events
- Same domain registrant email or WHOIS organization
- Same ASN or hosting provider with same account fingerprint
- Same SSL certificate fingerprint or serial number across C2 domains

## Use Cases
- Multiple unrelated-appearing incidents share IOCs (same C2 IP, same malware hash, similar TTPs)
- An ISAC partner shares indicators from an incident that match your own historical events
- Building a campaign report linking adversary activity over weeks or months to a single operation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Maltego, MISP Correlation Engine, Neo4j

## Sources
- correlating-threat-campaigns
