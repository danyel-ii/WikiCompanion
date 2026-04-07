# Cwp

## Overview
Cwp is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cwp is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cwp works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- defender for cloud
- cspm
- cwpp
- security recommendations
- microsoft defender
- azure security
- cnapp
- secure score
- cloud workload protection

## Typical Workflow
- Enable the appropriate Defender plans for each workload type requiring protection.
- az security pricing create --name CloudPosture --tier standard
- az security pricing create --name Containers --tier standard
- --subplan PerStorageAccount
- Activate Defender plans for each workload type: Servers, Containers, App Service, Storage, Databases, Key Vault, Resource Manager, and DNS. Each plan provides specialized threat detection and vulnerability assessment.
- az security pricing create --name VirtualMachines --tier Standard --subplan P2
- az security pricing create --name SqlServers --tier Standard

## Use Cases
- When enabling comprehensive security monitoring across Azure subscriptions
- When implementing cloud workload protection for VMs, containers, SQL, storage, and Key Vault
- When compliance requirements demand continuous assessment against regulatory frameworks
- When building adaptive security controls that respond to detected threats
- When centralizing security findings from Azure-native and hybrid workloads
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
- Azure Logic Apps, Azure Policy, Microsoft Defender For Cloud, And GCP, And Regulatory Compliance Capabilities, And Threat Intelligence, And Threat Protection Across Azure, AWS

## Sources
- implementing-azure-defender-for-cloud
- securing-azure-with-microsoft-defender
