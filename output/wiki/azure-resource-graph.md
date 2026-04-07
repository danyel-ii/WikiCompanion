# Azure Resource Graph

## Overview
Azure Resource Graph is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Azure Resource Graph is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Azure Resource Graph works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- storage security
- blob storage
- sas tokens
- data protection
- microsoft defender
- azure security
- cnapp
- secure score
- cloud workload protection

## Typical Workflow
- List all storage accounts across subscriptions and assess their baseline security settings.
- | where type == 'microsoft.storage/storageaccounts'
- | project name, resourceGroup, subscriptionId, location,
- properties.allowBlobPublicAccess,
- Activate Defender plans for each workload type: Servers, Containers, App Service, Storage, Databases, Key Vault, Resource Manager, and DNS. Each plan provides specialized threat detection and vulnerability assessment.
- az security pricing create --name VirtualMachines --tier Standard --subplan P2
- az security pricing create --name Containers --tier Standard
- az security pricing create --name SqlServers --tier Standard

## Use Cases
- When performing a security audit of Azure Storage accounts across subscriptions
- When responding to Microsoft Defender for Storage alerts about anonymous access or data exfiltration
- When compliance requires verification of encryption, network restrictions, and access logging
- When investigating potential data exposure through publicly accessible blob containers
- When onboarding Azure subscriptions and establishing storage security baselines
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
- And Access Policies, And GCP, And Networking, And Threat Intelligence, And Threat Protection Across Azure, AWS, Azure CLI, Azure Logic Apps

## Sources
- detecting-misconfigured-azure-storage
- securing-azure-with-microsoft-defender
