# Sigmahq

## Overview
Sigmahq is a detection rules tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sigmahq is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sigmahq works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- sigma
- detection rules
- siem
- mitre attack
- splunk
- elastic
- sentinel
- soc operations

## Typical Workflow
- title: Mimikatz Credential Dumping via LSASS Access
- id: 0d894093-71bc-43c3-8d63-bf520e73a7c5

## Use Cases
- SOC engineers need to create detection rules portable across multiple SIEM platforms
- Threat intelligence reports describe TTPs requiring new detection coverage
- Existing vendor-specific rules need standardization into a shareable format
- The team adopts Sigma as a detection-as-code standard in CI/CD pipelines
- **New CVE Detection**: Write Sigma rule for exploitation indicators (e.g., Log4Shell JNDI lookup patterns in web logs)
- **Hunting Rule Promotion**: Convert ad-hoc Splunk hunting query into Sigma rule for ongoing automated detection
- **Multi-SIEM Migration**: Converting 500+ Splunk correlation searches to Sigma for migration to Elastic Security
- **Purple Team Output**: Convert red team findings into Sigma rules for immediate defensive coverage
- **Threat Intel Operationalization**: Transform IOC-based threat reports into behavioral Sigma rules

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- ATT&CK Navigator, PySigma, Uncoder.IO

## Sources
- building-detection-rules-with-sigma
