# Hardware Tokens

## Overview
Hardware Tokens is a ot ics security tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Hardware Tokens is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Hardware Tokens works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- remote access
- jump server
- mfa
- ot ics security

## Typical Workflow
- Implement a defense-in-depth remote access architecture with an intermediate system in the DMZ that prevents any direct network connectivity between external users and OT systems.
- location: "Internet-facing firewall"
- service: "VPN gateway (IKEv2/IPsec or SSL VPN)"
- authentication: "Certificate + MFA (CIP-005-7 R2.4)"

## Use Cases
- When implementing or upgrading remote access architecture for OT environments
- When onboarding vendors who require remote access to OT systems for support and maintenance
- When implementing CIP-005-7 R2 requirements for remote access management including MFA
- When replacing legacy direct VPN access to OT networks with a secure jump server architecture
- When responding to an incident involving unauthorized remote access to industrial control systems

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Biometrics For OT Access Verification, And Recording For OT Remote Access, BeyondTrust Privileged Remote Access, Claroty Secure Remote Access, Credential Vaulting, CyberArk Privileged Access Security, Duo Security

## Sources
- securing-remote-access-to-ot-environment
