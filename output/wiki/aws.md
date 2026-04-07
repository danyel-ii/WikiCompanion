# AWS

## Overview
AWS is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- microsoft defender
- azure security
- cnapp
- secure score
- cloud workload protection
- cloud security

## Typical Workflow
- Activate Defender plans for each workload type: Servers, Containers, App Service, Storage, Databases, Key Vault, Resource Manager, and DNS. Each plan provides specialized threat detection and vulnerability assessment.
- az security pricing create --name VirtualMachines --tier Standard --subplan P2
- az security pricing create --name Containers --tier Standard
- az security pricing create --name SqlServers --tier Standard

## Use Cases
- When deploying cloud workload protection across Azure subscriptions and resource groups
- When establishing a Secure Score baseline and prioritizing security recommendations
- When extending threat protection to multi-cloud environments including AWS and GCP
- When enabling container security for AKS clusters and Azure Container Registry
- When integrating AI workload security with the Data and AI security dashboard

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And GCP, And Threat Intelligence, And Threat Protection Across Azure, Azure Logic Apps, Azure Policy, Azure Resource Graph, CWP, Microsoft Defender For Cloud

## Sources
- securing-azure-with-microsoft-defender
