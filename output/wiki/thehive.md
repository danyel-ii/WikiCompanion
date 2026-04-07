# Thehive

## Overview
Thehive is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Thehive is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Thehive works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- dashboard
- incident response
- splunk
- visualization
- situational awareness
- metrics
- soc operations
- IR playbook
- runbook
- NIST 800 61
- SOAR integration

## Typical Workflow
- <dashboard version="2" theme="dark">
- <label>Active Incident Response Dashboard</label>
- <description>Real-time tracking for IR-2024-0450</description>
- <title>Incident Summary</title>
- Identify the top incident types based on organizational risk assessment and historical data
- Scope each playbook to a single incident type for clarity (do not combine unrelated scenarios)
- Define trigger conditions that activate the playbook
- 1. Ransomware incident response
- 2. Phishing/credential compromise
- 3. Business email compromise

## Use Cases
- IR teams need real-time dashboards during active incidents for coordination and tracking
- SOC leadership requires operational dashboards showing incident status and analyst workload
- Post-incident reviews need visual timelines and impact assessments
- Executive briefings require high-level incident metrics and trend analysis
- **Active Ransomware Incident**: Dashboard showing encryption spread, containment status, backup verification, recovery progress
- **Data Breach Investigation**: Dashboard tracking affected data stores, exfiltration volume, notification requirements
- **Phishing Campaign Response**: Dashboard showing recipient count, click rate, credential exposure, remediation status
- **Monthly SOC Report**: Leadership dashboard with incident trends, MTTD/MTTR metrics, analyst performance
- **Compliance Audit**: Dashboard demonstrating detection coverage, response SLA compliance, and incident closure metrics
- Establishing or maturing an incident response program from scratch

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Cortex XSOAR, Confluence, PagerDuty, Splunk, 700+ Integrations, And Canvas For Security Dashboards, And Collaborative War Room, And One Click Host Containment

## Sources
- building-incident-response-dashboard
- building-incident-response-playbook
- conducting-post-incident-lessons-learned
- implementing-ticketing-system-for-incidents
- triaging-security-incident
- triaging-security-incident-with-ir-playbook
