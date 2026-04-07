# And Incident Review

## Overview
And Incident Review is a detection engineering tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Incident Review is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Incident Review works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- siem
- use cases
- detection engineering
- mitre attack
- splunk
- elastic
- sentinel
- soc operations

## Typical Workflow
- attack = json.load(f)

## Use Cases
- SOC teams need to build or expand their SIEM detection library from scratch
- Threat assessments identify ATT&CK technique gaps requiring new detection rules
- Detection engineers need a structured process for use case design, testing, and deployment
- Compliance requirements mandate specific detection capabilities (PCI DSS, HIPAA, SOX)
- **Post-Incident Use Case**: After a ransomware incident, build detection for the initial access vector discovered during investigation
- **Compliance-Driven**: PCI DSS requires detection of admin account misuse — build use cases for 4672/4720/4732 events
- **Threat-Intel Driven**: New APT group targets your sector — build use cases for their documented TTPs
- **Red Team Findings**: Purple team exercise identifies blind spots — convert findings into production detection rules
- **SIEM Migration**: Migrating from QRadar to Splunk — convert and validate all existing use cases on new platform

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Lighthouse Multi Tenant, And ML Based Anomaly Detection, Atomic Red Team, ATT&CK Navigator, Elastic Security, EQL Sequences, Fusion ML Engine, Microsoft Sentinel

## Sources
- implementing-siem-use-cases-for-detection
