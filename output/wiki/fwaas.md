# Fwaas

## Overview
Fwaas is a zero trust architecture tool that appears across zero trust architecture workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Fwaas is best understood as a zero-trust-architecture tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Fwaas works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- prisma access
- palo alto
- ztna
- sase
- globalprotect
- strata cloud manager
- zero trust
- zero trust architecture

## Typical Workflow
- Set up the cloud infrastructure for mobile user and remote network connections.
- Service Connection: Auto-selected based on user location
- DNS Servers: 10.1.1.10, 10.1.1.11 (corporate DNS)
- IP Pool for Mobile Users: 10.100.0.0/16
- Authentication: SAML with Okta (Primary), Entra ID (Secondary)
- GlobalProtect Portal: portal.company.com
- GlobalProtect Gateway: Auto (nearest Prisma Access location)

## Use Cases
- When implementing enterprise-grade SASE with integrated ZTNA, SWG, CASB, and FWaaS
- When replacing both VPN and branch office firewalls with cloud-delivered security
- When needing advanced threat prevention (WildFire, DNS Security) for remote access traffic
- When deploying zero trust for both mobile users and remote network (branch) connections
- When integrating ZTNA with existing Palo Alto NGFW infrastructure via Strata Cloud Manager

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CASB, Cortex Data Lake, DLP, GlobalProtect Agent, Prisma Access, Strata Cloud Manager, SWG, WildFire

## Sources
- deploying-palo-alto-prisma-access-zero-trust
