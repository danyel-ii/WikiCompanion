# AWS Cloudtrail

## Overview
AWS Cloudtrail is a aws forensics tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Cloudtrail is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Cloudtrail works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud IR
- AWS forensics
- Azure incident response
- GCP security
- identity containment
- incident response
- cloud security
- aws
- s3
- data exfiltration
- guardduty
- macie

## Typical Workflow
- ConsoleLogin from unexpected geolocation or IP
- CreateAccessKey for existing IAM user (persistence)
- PutBucketPolicy making S3 bucket public
- AssumeRole to cross-account roles
- DeleteTrail or StopLogging (defense evasion)
- CreateUser or AttachUserPolicy (privilege escalation)
- **Azure Indicators:**
- Configure CloudTrail to capture all S3 object-level operations for forensic analysis.
- aws lambda list-functions --query 'Functions[*].[FunctionName,Runtime,Role,Handler,Layers]' --output table
- aws apigateway get-rest-apis --query 'items[*].[id,name]' --output table

## Use Cases
- Cloud security posture management (CSPM) alerts on unauthorized resource changes
- CloudTrail, Azure Activity Logs, or GCP Audit Logs show suspicious API calls
- Cloud access keys or service principal credentials are suspected compromised
- Unauthorized compute instances, storage buckets, or IAM changes are detected
- A cloud-hosted application is breached and attacker activity spans cloud services
- Only disabling the access key without checking for new access keys or IAM users created as persistence
- Forgetting to revoke temporary credentials from assumed roles (STS tokens remain valid until expiry)
- When GuardDuty detects anomalous S3 access patterns such as bulk downloads from unusual IPs
- When investigating suspected data breach involving S3-stored sensitive data
- When building detection rules for S3 data loss prevention monitoring

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CloudWatch Logs Insights, Amazon Athena, Prowler, ScoutSuite, Amazon GuardDuty, Amazon Macie, Amazon Security Lake, And Data Exfiltration

## Sources
- conducting-cloud-incident-response
- detecting-s3-data-exfiltration-attempts
- detecting-serverless-function-injection
- implementing-cloud-trail-log-analysis
- performing-cloud-penetration-testing-with-pacu
