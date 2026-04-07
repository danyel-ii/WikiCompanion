# Prowler Azure

## Overview
Prowler Azure is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Prowler Azure is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Prowler Azure works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- storage security
- blob storage
- sas tokens
- data protection

## Typical Workflow
- List all storage accounts across subscriptions and assess their baseline security settings.
- | where type == 'microsoft.storage/storageaccounts'
- | project name, resourceGroup, subscriptionId, location,
- properties.allowBlobPublicAccess,

## Use Cases
- When performing a security audit of Azure Storage accounts across subscriptions
- When responding to Microsoft Defender for Storage alerts about anonymous access or data exfiltration
- When compliance requires verification of encryption, network restrictions, and access logging
- When investigating potential data exposure through publicly accessible blob containers
- When onboarding Azure subscriptions and establishing storage security baselines

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Access Policies, And Networking, Azure CLI, Azure Resource Graph, Containers, Encryption, Microsoft Defender For Storage, ScoutSuite

## Sources
- detecting-misconfigured-azure-storage
