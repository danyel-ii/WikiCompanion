# Amazon Eventbridge

## Overview
Amazon Eventbridge is a runtime monitoring tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Amazon Eventbridge is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Amazon Eventbridge works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- amazon guardduty
- threat detection
- aws security
- runtime monitoring
- cloud soc
- cloud security
- aws
- security hub
- compliance
- cspm
- cis benchmark
- aws security hub

## Typical Workflow
- Activate GuardDuty at the organization level using a delegated administrator account. Enable all protection plans including S3 Protection, EKS Audit Log Monitoring, Runtime Monitoring, Malware Protection, RDS Login Activity, and Lambda Network Activity Monitoring.
- Enable Security Hub in the management account and select compliance standards to evaluate.
- --control-finding-generator SECURITY_CONTROL
- Activate Security Hub in the delegated administrator account and enable security standards. AWS Security Hub CSPM supports CIS AWS Foundations Benchmark v5.0, AWS Foundational Security Best Practices, PCI DSS v3.2.1, and NIST SP 800-53.
- --standards-subscription-requests '[

## Use Cases
- When establishing continuous threat detection for new or existing AWS accounts
- When investigating GuardDuty findings related to compromised instances, credential abuse, or data exfiltration
- When building automated incident response playbooks triggered by GuardDuty findings
- When extending threat coverage to container workloads running on EKS, ECS, or Fargate
- When enabling malware scanning for EBS volumes attached to suspicious EC2 instances
- When establishing centralized security posture management across multiple AWS accounts
- When compliance requirements demand continuous monitoring against CIS, PCI DSS, or NIST 800-53 standards
- When aggregating findings from GuardDuty, Inspector, Macie, Firewall Manager, and third-party tools
- When building automated remediation workflows triggered by security findings
- When executive stakeholders require a security compliance dashboard across the organization

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AWS Config, AWS Security Hub, Amazon Detective, Amazon GuardDuty, Amazon Security Lake, And API Activity, And Runtime Telemetry, AWS Audit Manager

## Sources
- detecting-cloud-threats-with-guardduty
- implementing-aws-security-hub
- implementing-aws-security-hub-compliance
