# Duo

## Overview
Duo is a **duo authentication proxy**: on premises proxy for radius/ldap integration tool that appears across identity access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Duo is best understood as a identity-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Duo works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- **Duo Authentication Proxy**: On-premises proxy for RADIUS/LDAP integration
- **Duo Web SDK**: Embed Duo MFA in web applications
- **Duo OIDC/SAML**: SSO integration for cloud applications
- **Duo for RDP**: Windows Logon MFA
- **Duo Unix**: PAM-based MFA for SSH
- **Trusted Networks**: Reduce MFA friction for corporate networks
- **Remembered Devices**: Skip MFA for trusted devices (configurable duration)
- **Device Health**: Block or require MFA based on OS patch level, encryption, firewall
- **Risk-Based Authentication**: Step-up MFA for anomalous login patterns

## Typical Workflow
- 1. Deploy Duo Authentication Proxy on Windows/Linux server
- 2. Configure primary authentication (AD/LDAP or RADIUS)
- 3. Configure Duo API credentials (Integration Key, Secret Key, API Hostname)
- 4. Set failmode (safe=deny if Duo unreachable, secure=allow)
- 5. Test proxy connectivity to Duo cloud and AD
- 1. Configure VPN concentrator for RADIUS authentication
- 2. Point RADIUS to Duo Authentication Proxy
- 3. Configure Duo proxy with [radius_server_auto] section
- 4. Test VPN login with Duo Push
- 5. Deploy to all VPN users with enrollment period

## Use Cases
- When deploying or configuring configuring multi factor authentication with duo capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- configuring-multi-factor-authentication-with-duo
