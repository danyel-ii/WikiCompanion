# Servicenow Performance Analytics

## Overview
Servicenow Performance Analytics is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Servicenow Performance Analytics is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Servicenow Performance Analytics works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- metrics
- kpi
- mttd
- mttr
- dashboard
- reporting
- continuous improvement
- soc operations

## Typical Workflow
- | Metric | Definition | Target | NIST CSF |
- |--------|-----------|--------|----------|
- | MTTD | Time from threat occurrence to SOC detection | <15 min | Detect |
- | MTTA | Time from alert to analyst acknowledgment | <5 min | Respond |
- | MTTI | Time from acknowledgment to investigation start | <10 min | Respond |
- | MTTC | Time from investigation to containment | <1 hour | Respond |
- | MTTR | Time from detection to full resolution | <4 hours | Recover |
- | FP Rate | Percentage of false positive alerts | <30% | Detect |
- | TP Rate | Percentage of true positive alerts | >40% | Detect |
- | Coverage | ATT&CK techniques with active detection | >60% | Detect |

## Use Cases
- SOC leadership needs data-driven visibility into operational performance
- Continuous improvement programs require baseline measurements and trend tracking
- Executive reporting demands quantified security posture and ROI metrics
- Staffing decisions need objective workload and capacity data
- Compliance audits require documented SOC performance evidence
- **Quarterly Business Review**: Present MTTD/MTTR trends, detection coverage growth, and alert quality improvements
- **Staffing Justification**: Use workload metrics to justify additional analyst headcount or shift adjustments
- **Tool ROI Assessment**: Compare alert quality and response times before and after new tool deployment
- **Compliance Evidence**: Provide documented SOC performance metrics for ISO 27001 or SOC 2 audits
- **Vendor Comparison**: Benchmark SOC metrics against industry peers using surveys (SANS, Ponemon)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- ATT&CK Navigator, Grafana, Power BI, Splunk Dashboard Studio

## Sources
- building-soc-metrics-and-kpi-tracking
