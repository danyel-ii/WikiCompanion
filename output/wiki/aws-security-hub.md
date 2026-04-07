# AWS Security Hub

## Overview
AWS Security Hub is a runtime monitoring tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Security Hub is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Security Hub works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cis benchmarks
- cloud audit
- compliance assessment
- prowler
- security hardening
- cloud security
- amazon guardduty
- threat detection
- aws security
- runtime monitoring
- cloud soc
- aws

## Typical Workflow
- Choose the correct benchmark version for each cloud provider. Current versions as of 2025 include CIS AWS Foundations Benchmark v5.0, CIS Azure Foundations Benchmark v4.0, and CIS GCP Foundations Benchmark v4.0.
- +-------------------+-------------------------+------------------------+
- | Section           | AWS v5.0                | Azure v4.0             |
- | Identity & Access | IAM policies, MFA, root | Azure AD, RBAC, PIM    |
- | Logging           | CloudTrail, Config      | Activity Log, Diag     |
- | Monitoring        | CloudWatch alarms       | Defender, Sentinel     |
- | Networking        | VPC, SG, NACLs         | NSG, ASG, Firewall     |
- Activate GuardDuty at the organization level using a delegated administrator account. Enable all protection plans including S3 Protection, EKS Audit Log Monitoring, Runtime Monitoring, Malware Protection, RDS Login Activity, and Lambda Network Activity Monitoring.
- Enable Security Hub in the management account and select compliance standards to evaluate.
- --control-finding-generator SECURITY_CONTROL

## Use Cases
- When performing initial security audits of cloud environments against industry-standard benchmarks
- When preparing for SOC 2, ISO 27001, or regulatory audits that reference CIS controls
- When establishing a measurable security baseline for new cloud accounts or subscriptions
- When tracking compliance improvement over time with periodic reassessment
- When evaluating the security posture of acquired or inherited cloud environments
- When establishing continuous threat detection for new or existing AWS accounts
- When investigating GuardDuty findings related to compromised instances, credential abuse, or data exfiltration
- When building automated incident response playbooks triggered by GuardDuty findings
- When extending threat coverage to container workloads running on EKS, ECS, or Fargate
- When enabling malware scanning for EBS volumes attached to suspicious EC2 instances

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Prowler, Amazon EventBridge, AWS Config, GCP Security Command Center, ScoutSuite, Amazon Detective, Amazon GuardDuty, Amazon Security Lake

## Sources
- auditing-cloud-with-cis-benchmarks
- detecting-cloud-threats-with-guardduty
- implementing-aws-security-hub-compliance
- implementing-cloud-security-posture-management
- implementing-cloud-vulnerability-posture-management
- securing-aws-iam-permissions
