# Vpc Flow Logs

## Overview
Vpc Flow Logs is a runtime monitoring tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Vpc Flow Logs is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Vpc Flow Logs works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- amazon guardduty
- threat detection
- aws security
- runtime monitoring
- cloud soc
- cloud security
- cryptomining detection
- cloud abuse
- resource hijacking
- guardduty crypto
- cost anomaly
- gcp

## Typical Workflow
- Activate GuardDuty at the organization level using a delegated administrator account. Enable all protection plans including S3 Protection, EKS Audit Log Monitoring, Runtime Monitoring, Malware Protection, RDS Login Activity, and Lambda Network Activity Monitoring.
- Deploy detection across four signal categories: cost anomalies, compute utilization, network traffic, and runtime processes.
- Enumerate all firewall rules and identify overly permissive configurations.
- --format="table(name, network, direction, priority, allowed[].map().firewall_rule().list():label=ALLOWED, sourceRanges, targetTags)"
- --format="table(name, network, sourceRanges, targetTags)"

## Use Cases
- When establishing continuous threat detection for new or existing AWS accounts
- When investigating GuardDuty findings related to compromised instances, credential abuse, or data exfiltration
- When building automated incident response playbooks triggered by GuardDuty findings
- When extending threat coverage to container workloads running on EKS, ECS, or Fargate
- When enabling malware scanning for EBS volumes attached to suspicious EC2 instances
- When cloud billing alerts indicate unexpected compute cost spikes
- When GuardDuty generates CryptoCurrency or Impact finding types
- When investigating compromised IAM credentials that may be used to launch mining instances
- When monitoring container workloads for unauthorized process execution
- When establishing proactive detection controls against resource hijacking attacks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Amazon Detective, Amazon GuardDuty, Amazon EventBridge, Amazon Security Lake, And API Activity, And Managing VPC Firewall Rules In GCP, And Runtime Process Monitoring, And Runtime Telemetry

## Sources
- detecting-cloud-threats-with-guardduty
- detecting-cryptomining-in-cloud
- implementing-gcp-vpc-firewall-rules
