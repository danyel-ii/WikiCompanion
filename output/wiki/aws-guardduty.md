# AWS Guardduty

## Overview
AWS Guardduty is a secrets detection tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Guardduty is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Guardduty works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- credential exposure
- trufflehog
- secrets detection
- devsecops
- credential compromise
- threat detection
- guardduty
- incident response
- anomaly detection

## Typical Workflow
- Install TruffleHog v3 and verify it can detect the AWS credential patterns.
- Monitor GuardDuty findings and CloudTrail anomalies that indicate credential abuse.

## Use Cases
- When integrating secrets detection into CI/CD pipelines to prevent credential commits reaching production
- When performing a security audit of existing repositories for historically committed AWS credentials
- When responding to an AWS GuardDuty alert about credential usage from an unexpected IP or region
- When onboarding repositories from acquired companies or third-party vendors
- When validating that credential rotation processes have removed all references to old access keys
- When investigating alerts about unusual cloud API activity from unfamiliar locations
- When building detection rules for credential theft and abuse across cloud environments
- When responding to notifications from cloud providers about exposed credentials
- When monitoring for credential stuffing or brute force attacks against cloud identities
- When assessing the scope of a credential compromise after initial detection

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Activity Log, And CI, And Risky User Behavior, Audit Log, BFG Repo Cleaner, CloudTrail, Compromised Credentials, Elastic

## Sources
- detecting-aws-credential-exposure-with-trufflehog
- detecting-compromised-cloud-credentials
