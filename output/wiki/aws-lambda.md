# AWS Lambda

## Overview
AWS Lambda is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Lambda is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Lambda works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- security hub
- compliance
- cspm
- cis benchmark
- serverless
- lambda
- azure functions
- cloud functions
- security review

## Typical Workflow
- Enable Security Hub in the management account and select compliance standards to evaluate.
- --control-finding-generator SECURITY_CONTROL
- List all functions across cloud providers with their runtime, memory, timeout, and network settings.

## Use Cases
- When establishing centralized security posture management across multiple AWS accounts
- When compliance requirements demand continuous monitoring against CIS, PCI DSS, or NIST 800-53 standards
- When aggregating findings from GuardDuty, Inspector, Macie, Firewall Manager, and third-party tools
- When building automated remediation workflows triggered by security findings
- When executive stakeholders require a security compliance dashboard across the organization
- When auditing serverless applications before production deployment
- When investigating potential data exposure through function environment variables or logs
- When assessing the blast radius of a compromised serverless function execution role
- When compliance reviews require documentation of serverless security controls
- When building secure-by-default templates for serverless deployments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Prowler, Amazon EventBridge, And Resource Policies, And Runtime Versions, AWS Config, AWS Security Hub, Bandit, Checkov

## Sources
- implementing-aws-security-hub-compliance
- performing-serverless-function-security-review
