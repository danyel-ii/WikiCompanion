# Thehive Cortex

## Overview
Thehive Cortex is a threat intelligence tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Thehive Cortex is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Thehive Cortex works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- SOAR
- enrichment
- IOC
- Cortex XSOAR
- Splunk SOAR
- VirusTotal
- automation
- CTI
- NIST CSF
- threat intelligence

## Typical Workflow
- SIEM Alert → Extract IOCs → Classify Type → Route to enrichment functions
- IP Address → AbuseIPDB + Shodan + VirusTotal IP + MISP
- Domain → VirusTotal Domain + PassiveTotal + Shodan + MISP
- URL → URLScan.io + VirusTotal URL + Google Safe Browse
- File Hash → VirusTotal Files + MalwareBazaar + MISP
- → Aggregate results → Calculate confidence score → Update alert → Notify analyst
- from dataclasses import dataclass, field

## Use Cases
- Building a SOAR playbook that automatically enriches SIEM alerts with threat intelligence context before routing to analysts
- Creating a Python pipeline for bulk IOC enrichment from phishing email submissions
- Reducing analyst mean time to triage (MTTT) by pre-populating alert context with VT, Shodan, and MISP data

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And AbuseIPDB, Cortex XSOAR, MISP, Shodan, Splunk SOAR, Tines

## Sources
- automating-ioc-enrichment
