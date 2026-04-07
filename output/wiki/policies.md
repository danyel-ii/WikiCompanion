# Policies

## Overview
Policies is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Policies is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Policies works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- s3
- bucket permissions
- data protection
- access control
- azure
- entra id
- active directory
- iam audit
- conditional access
- passwordless

## Typical Workflow
- Check the account-level S3 Block Public Access settings first, then list all buckets with their regions.
- Assess the tenant's baseline identity security settings including security defaults and legacy authentication status.
- Connect-MgGraph -Scopes "Directory.Read.All","Policy.Read.All","AuditLog.Read.All"
- Get-MgOrganization | Select-Object DisplayName, Id, VerifiedDomains
- Get-MgPolicyIdentitySecurityDefaultEnforcementPolicy | Select-Object IsEnabled
- Get-MgPolicyAuthenticationMethodPolicy | ConvertTo-Json -Depth 5
- Connect-MgGraph -Scopes "Policy.ReadWrite.AuthenticationMethod", "User.ReadWrite.All"

## Use Cases
- When conducting a security assessment of AWS environments to identify publicly exposed data
- When onboarding a new AWS account and establishing a security baseline for storage resources
- When responding to an alert about potential S3 data exposure from AWS Trusted Advisor or Security Hub
- When compliance frameworks (SOC 2, PCI DSS, HIPAA) require periodic review of data access controls
- When a breach or credential compromise necessitates immediate review of all accessible S3 resources
- When performing a security assessment of an Azure tenant's identity configuration
- When compliance audits require review of authentication policies, MFA enforcement, and role assignments
- When onboarding a new Azure tenant after merger or acquisition
- When investigating suspicious sign-in activity or compromised accounts
- When validating conditional access policies adequately protect against identity-based attacks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Graph API, ScoutSuite, ACLs, And Audit Logs, And Encryption Settings, And Generating Adoption Reports, And HIPAA Controls, And Identity Checks

## Sources
- auditing-aws-s3-bucket-permissions
- auditing-azure-active-directory-configuration
- implementing-passwordless-auth-with-microsoft-entra
