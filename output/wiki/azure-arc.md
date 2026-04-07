# Azure Arc

## Overview
Azure Arc is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Azure Arc is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Azure Arc works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- defender for cloud
- cspm
- cwpp
- security recommendations

## Typical Workflow
- Enable the appropriate Defender plans for each workload type requiring protection.
- az security pricing create --name CloudPosture --tier standard
- az security pricing create --name Containers --tier standard
- --subplan PerStorageAccount

## Use Cases
- When enabling comprehensive security monitoring across Azure subscriptions
- When implementing cloud workload protection for VMs, containers, SQL, storage, and Key Vault
- When compliance requirements demand continuous assessment against regulatory frameworks
- When building adaptive security controls that respond to detected threats
- When centralizing security findings from Azure-native and hybrid workloads

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Regulatory Compliance Capabilities, Azure Logic Apps, Azure Policy, CWP, Log Analytics Workspace, Microsoft Defender For Cloud

## Sources
- implementing-azure-defender-for-cloud
