# Prowler

## Overview
Prowler is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Prowler is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Prowler works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- s3
- bucket permissions
- data protection
- access control
- cis benchmarks
- cloud audit
- compliance assessment
- prowler
- security hardening
- cloud IR

## Typical Workflow
- Check the account-level S3 Block Public Access settings first, then list all buckets with their regions.
- Choose the correct benchmark version for each cloud provider. Current versions as of 2025 include CIS AWS Foundations Benchmark v5.0, CIS Azure Foundations Benchmark v4.0, and CIS GCP Foundations Benchmark v4.0.
- +-------------------+-------------------------+------------------------+
- | Section           | AWS v5.0                | Azure v4.0             |
- | Identity & Access | IAM policies, MFA, root | Azure AD, RBAC, PIM    |
- | Logging           | CloudTrail, Config      | Activity Log, Diag     |
- | Monitoring        | CloudWatch alarms       | Defender, Sentinel     |
- | Networking        | VPC, SG, NACLs         | NSG, ASG, Firewall     |
- ConsoleLogin from unexpected geolocation or IP
- CreateAccessKey for existing IAM user (persistence)

## Use Cases
- When conducting a security assessment of AWS environments to identify publicly exposed data
- When onboarding a new AWS account and establishing a security baseline for storage resources
- When responding to an alert about potential S3 data exposure from AWS Trusted Advisor or Security Hub
- When compliance frameworks (SOC 2, PCI DSS, HIPAA) require periodic review of data access controls
- When a breach or credential compromise necessitates immediate review of all accessible S3 resources
- When performing initial security audits of cloud environments against industry-standard benchmarks
- When preparing for SOC 2, ISO 27001, or regulatory audits that reference CIS controls
- When establishing a measurable security baseline for new cloud accounts or subscriptions
- When tracking compliance improvement over time with periodic reassessment
- When evaluating the security posture of acquired or inherited cloud environments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- ScoutSuite, AWS Config, AWS Security Hub, And GCP, Azure, IAM Access Analyzer, AWS CLI, AWS CloudTrail

## Sources
- auditing-aws-s3-bucket-permissions
- auditing-cloud-with-cis-benchmarks
- conducting-cloud-incident-response
- conducting-cloud-penetration-testing
- detecting-serverless-function-injection
- implementing-aws-security-hub-compliance
- implementing-cloud-security-posture-management
- performing-cloud-forensics-investigation
- performing-serverless-function-security-review
- remediating-s3-bucket-misconfiguration
- securing-aws-iam-permissions
- securing-aws-lambda-execution-roles
