# Microsoft Entra Admin Center

## Overview
Microsoft Entra Admin Center is a identity access management tool that appears across identity access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Entra Admin Center is best understood as a identity-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Entra Admin Center works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- passwordless
- FIDO2
- passkeys
- Microsoft Entra
- Windows Hello
- phishing resistant MFA
- identity access management
- OAuth
- scope minimization
- API security
- consent review
- third party risk

## Typical Workflow
- Connect-MgGraph -Scopes "Policy.ReadWrite.AuthenticationMethod", "User.ReadWrite.All"
- OAuth Grant Inventory - Microsoft Entra ID
- Enumerates all application registrations, service principals,
- and delegated/application permission grants.
- from collections import defaultdict
- self.tenant_id = tenant_id

## Use Cases
- Organization wants to eliminate password-based attacks (phishing, credential stuffing, brute force)
- Regulatory or internal mandate requires phishing-resistant MFA (Executive Order 14028, CISA guidance)
- Deploying FIDO2 security keys or Windows Hello for Business across the enterprise
- Migrating from legacy MFA (SMS, phone call) to phishing-resistant authentication methods
- Implementing passkey support for hybrid or cloud-joined Windows devices
- Reducing helpdesk costs from password reset requests
- Enforcing passwordless without ensuring all applications support modern authentication breaks access
- Annual or quarterly review of third-party application OAuth permissions
- After a security incident involving compromised OAuth tokens or unauthorized data access
- Compliance audit requiring documentation of third-party data access (GDPR Article 28, SOC 2)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Graph API, And Automating Scope Reviews, And Generating Adoption Reports, And Monitoring Sign In Analytics, And OAuth Grant Management, Assessing Third Party Risk, Cerby, Conditional Access Policies

## Sources
- implementing-passwordless-auth-with-microsoft-entra
- performing-oauth-scope-minimization-review
