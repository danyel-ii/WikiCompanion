# Splunk Dashboard Studio

## Overview
Splunk Dashboard Studio is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Splunk Dashboard Studio is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Splunk Dashboard Studio works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- dashboard
- incident response
- splunk
- visualization
- situational awareness
- metrics
- soc operations
- kpi
- mttd
- mttr
- reporting

## Typical Workflow
- <dashboard version="2" theme="dark">
- <label>Active Incident Response Dashboard</label>
- <description>Real-time tracking for IR-2024-0450</description>
- <title>Incident Summary</title>
- | Metric | Definition | Target | NIST CSF |
- |--------|-----------|--------|----------|
- | MTTD | Time from threat occurrence to SOC detection | <15 min | Detect |
- | MTTA | Time from alert to analyst acknowledgment | <5 min | Respond |
- | MTTI | Time from acknowledgment to investigation start | <10 min | Respond |
- | MTTC | Time from investigation to containment | <1 hour | Respond |

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
- SOC leadership needs data-driven visibility into operational performance

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Grafana, And Canvas For Security Dashboards, ATT&CK Navigator, Elastic Kibana Dashboard, Maps, Microsoft Sentinel Workbooks, Power BI, ServiceNow Performance Analytics

## Sources
- building-incident-response-dashboard
- building-soc-metrics-and-kpi-tracking
