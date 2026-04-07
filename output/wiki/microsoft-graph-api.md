# Microsoft Graph API

## Overview
Microsoft Graph API is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Graph API is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Graph API works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- entra id
- active directory
- iam audit
- conditional access
- OAuth
- Azure AD
- Microsoft Graph
- illicit consent
- application permissions
- passwordless

## Typical Workflow
- Assess the tenant's baseline identity security settings including security defaults and legacy authentication status.
- Connect-MgGraph -Scopes "Directory.Read.All","Policy.Read.All","AuditLog.Read.All"
- Get-MgOrganization | Select-Object DisplayName, Id, VerifiedDomains
- Get-MgPolicyIdentitySecurityDefaultEnforcementPolicy | Select-Object IsEnabled
- Get-MgPolicyAuthenticationMethodPolicy | ConvertTo-Json -Depth 5
- Connect-MgGraph -Scopes "Policy.ReadWrite.AuthenticationMethod", "User.ReadWrite.All"
- OAuth Grant Inventory - Microsoft Entra ID
- Enumerates all application registrations, service principals,
- and delegated/application permission grants.
- from collections import defaultdict

## Use Cases
- When performing a security assessment of an Azure tenant's identity configuration
- When compliance audits require review of authentication policies, MFA enforcement, and role assignments
- When onboarding a new Azure tenant after merger or acquisition
- When investigating suspicious sign-in activity or compromised accounts
- When validating conditional access policies adequately protect against identity-based attacks
- When investigating security incidents that require detecting suspicious oauth application consent
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques
- Organization wants to eliminate password-based attacks (phishing, credential stuffing, brute force)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Entra Admin Center, Policies, And Audit Logs, And Automating Scope Reviews, And Generating Adoption Reports, And Identity Checks, And Monitoring Sign In Analytics, And OAuth Grant Management

## Sources
- auditing-azure-active-directory-configuration
- detecting-suspicious-oauth-application-consent
- implementing-passwordless-auth-with-microsoft-entra
- performing-oauth-scope-minimization-review
