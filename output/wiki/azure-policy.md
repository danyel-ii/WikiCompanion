# Azure Policy

## Overview
Azure Policy is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Azure Policy is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Azure Policy works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cis benchmarks
- cloud audit
- compliance assessment
- prowler
- security hardening
- cloud security
- azure
- defender for cloud
- cspm
- cwpp
- security recommendations
- microsoft defender

## Typical Workflow
- Choose the correct benchmark version for each cloud provider. Current versions as of 2025 include CIS AWS Foundations Benchmark v5.0, CIS Azure Foundations Benchmark v4.0, and CIS GCP Foundations Benchmark v4.0.
- +-------------------+-------------------------+------------------------+
- | Section           | AWS v5.0                | Azure v4.0             |
- | Identity & Access | IAM policies, MFA, root | Azure AD, RBAC, PIM    |
- | Logging           | CloudTrail, Config      | Activity Log, Diag     |
- | Monitoring        | CloudWatch alarms       | Defender, Sentinel     |
- | Networking        | VPC, SG, NACLs         | NSG, ASG, Firewall     |
- Enable the appropriate Defender plans for each workload type requiring protection.
- az security pricing create --name CloudPosture --tier standard
- az security pricing create --name Containers --tier standard

## Use Cases
- When performing initial security audits of cloud environments against industry-standard benchmarks
- When preparing for SOC 2, ISO 27001, or regulatory audits that reference CIS controls
- When establishing a measurable security baseline for new cloud accounts or subscriptions
- When tracking compliance improvement over time with periodic reassessment
- When evaluating the security posture of acquired or inherited cloud environments
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
- And GCP, Azure Logic Apps, CWP, Microsoft Defender For Cloud, And Regulatory Compliance Capabilities, And Threat Intelligence, And Threat Protection Across Azure, AWS

## Sources
- auditing-cloud-with-cis-benchmarks
- implementing-azure-defender-for-cloud
- securing-azure-with-microsoft-defender
