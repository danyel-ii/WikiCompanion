# AWS Audit Manager

## Overview
AWS Audit Manager is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Audit Manager is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Audit Manager works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- aws security hub
- cspm
- compliance automation
- security standards
- finding aggregation
- cloud security

## Typical Workflow
- Activate Security Hub in the delegated administrator account and enable security standards. AWS Security Hub CSPM supports CIS AWS Foundations Benchmark v5.0, AWS Foundational Security Best Practices, PCI DSS v3.2.1, and NIST SP 800-53.
- --standards-subscription-requests '[

## Use Cases
- When establishing a centralized security findings dashboard across multiple AWS accounts
- When enabling automated compliance checks against CIS, PCI-DSS, NIST, or AWS Foundational Security Best Practices
- When integrating findings from GuardDuty, Inspector, Macie, and third-party security tools
- When building automated remediation workflows for recurring security misconfigurations
- When preparing compliance evidence for auditors requiring continuous posture monitoring

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Amazon EventBridge, AWS Config, AWS Security Hub CSPM, AWS Systems Manager

## Sources
- implementing-aws-security-hub
