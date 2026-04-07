# Networking

## Overview
Networking is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Networking is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Networking works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- entra id
- active directory
- iam audit
- conditional access

## Typical Workflow
- Assess the tenant's baseline identity security settings including security defaults and legacy authentication status.
- Connect-MgGraph -Scopes "Directory.Read.All","Policy.Read.All","AuditLog.Read.All"
- Get-MgOrganization | Select-Object DisplayName, Id, VerifiedDomains
- Get-MgPolicyIdentitySecurityDefaultEnforcementPolicy | Select-Object IsEnabled
- Get-MgPolicyAuthenticationMethodPolicy | ConvertTo-Json -Depth 5

## Use Cases
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
- And Audit Logs, And Identity Checks, AzureADRecon, Microsoft Defender For Identity, Microsoft Graph API, Microsoft Graph PowerShell SDK, Policies, Roles

## Sources
- auditing-azure-active-directory-configuration
