# Netskope Casb

## Overview
Netskope Casb is a zero trust architecture tool that appears across zero trust architecture workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Netskope Casb is best understood as a zero-trust-architecture tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Netskope Casb works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- zero trust
- saas security
- casb
- sspm
- conditional access
- oauth governance
- session controls
- zero trust architecture

## Typical Workflow
- Centralize authentication for all SaaS applications through a single IdP.
- Connect-MgGraph -Scopes "Application.ReadWrite.All"
- preferredSingleSignOnMode = "saml"

## Use Cases
- When securing access to SaaS applications (Microsoft 365, Google Workspace, Salesforce, Slack)
- When implementing conditional access policies requiring MFA and device compliance for SaaS
- When deploying CASB for shadow IT discovery and unsanctioned app blocking
- When enforcing session-level controls (DLP, download restrictions) for sensitive SaaS data
- When governing OAuth application permissions and detecting excessive consent grants

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Adaptive Shield, And SSPM, DLP, Microsoft Defender For Cloud Apps, Microsoft Entra ID Conditional Access, Okta Identity Governance, Session Controls, SSPM Tools

## Sources
- implementing-zero-trust-for-saas-applications
