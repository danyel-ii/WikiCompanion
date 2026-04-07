# Cartography

## Overview
Cartography is a aws forensics tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cartography is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cartography works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud IR
- AWS forensics
- Azure incident response
- GCP security
- identity containment
- incident response
- cloud pentesting
- offensive security
- aws exploitation
- shared responsibility
- mitre attack cloud
- cloud security

## Typical Workflow
- ConsoleLogin from unexpected geolocation or IP
- CreateAccessKey for existing IAM user (persistence)
- PutBucketPolicy making S3 bucket public
- AssumeRole to cross-account roles
- DeleteTrail or StopLogging (defense evasion)
- CreateUser or AttachUserPolicy (privilege escalation)
- **Azure Indicators:**
- Establish testing boundaries based on the shared responsibility model. The customer is responsible for testing configurations, IAM policies, application security, and data protection. The cloud provider manages physical infrastructure, hypervisor, and managed service internals.
- Cloud Penetration Test Scope Document
- =======================================

## Use Cases
- Cloud security posture management (CSPM) alerts on unauthorized resource changes
- CloudTrail, Azure Activity Logs, or GCP Audit Logs show suspicious API calls
- Cloud access keys or service principal credentials are suspected compromised
- Unauthorized compute instances, storage buckets, or IAM changes are detected
- A cloud-hosted application is breached and attacker activity spans cloud services
- Only disabling the access key without checking for new access keys or IAM users created as persistence
- Forgetting to revoke temporary credentials from assumed roles (STS tokens remain valid until expiry)
- When performing authorized security assessments of cloud environments before production deployment
- When validating cloud security controls after a major architectural change or migration
- When compliance requirements mandate annual penetration testing of cloud infrastructure

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And GCP, Azure, Prowler, ScoutSuite, And Data Access Opportunities, And Persistence Testing, AWS CloudTrail, Azure Activity Logs

## Sources
- conducting-cloud-incident-response
- conducting-cloud-penetration-testing
- performing-cloud-asset-inventory-with-cartography
