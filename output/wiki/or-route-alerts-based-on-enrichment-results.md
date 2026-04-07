# Or Route Alerts Based On Enrichment Results

## Overview
Or Route Alerts Based On Enrichment Results is a detection engineering tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Or Route Alerts Based On Enrichment Results is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Or Route Alerts Based On Enrichment Results works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- alert fatigue
- tuning
- risk based alerting
- false positive
- siem
- detection engineering
- soc operations

## Typical Workflow
- --- Alert volume and disposition analysis (last 90 days)
- index=notable earliest=-90d
- | stats count AS total_alerts,
- sum(eval(if(status_label="Resolved - True Positive", 1, 0))) AS true_positives,
- sum(eval(if(status_label="Resolved - False Positive", 1, 0))) AS false_positives,
- sum(eval(if(status_label="Resolved - Benign", 1, 0))) AS benign,
- sum(eval(if(status_label="New" OR status_label="In Progress", 1, 0))) AS unresolved
- | eval fp_rate = round(false_positives / total_alerts * 100, 1)
- | eval tp_rate = round(true_positives / total_alerts * 100, 1)

## Use Cases
- SOC analysts face more alerts than they can reasonably investigate (>100 alerts/analyst/shift)
- False positive rates exceed 70% on key detection rules
- True positives are being missed or dismissed due to alert volume
- Management reports declining analyst morale or increasing turnover related to workload
- **Post-RBA Implementation**: Convert 15 threshold alerts into risk contributions, reducing daily volume by 85%
- **Quarterly Tuning Cycle**: Review top 20 noisiest rules, apply exclusions, measure FP rate improvement
- **New Tool Deployment**: After deploying new EDR, tune initial detection rules to baseline the environment
- **Analyst Capacity Planning**: Calculate optimal alert-to-analyst ratio (target 40-60 alerts/analyst/shift)
- **Compliance Balance**: Maintain detection coverage for compliance while reducing operational alert volume

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Chronicle SOAR, Elastic Detection Rules, Splunk ES Adaptive Response, Splunk ES Risk Based Alerting, Suppress, Tines

## Sources
- implementing-alert-fatigue-reduction
