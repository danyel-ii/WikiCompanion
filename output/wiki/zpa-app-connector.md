# Zpa App Connector

## Overview
Zpa App Connector is a zero trust architecture tool that appears across zero trust architecture workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Zpa App Connector is best understood as a zero-trust-architecture tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Zpa App Connector works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- zscaler
- zpa
- ztna
- zero trust
- app connector
- access policy
- sase
- zero trust architecture

## Typical Workflow
- App Connectors establish outbound-only tunnels to the ZPA cloud, providing access to internal applications.
- sudo yum install -y https://yum.private.zscaler.com/yum/el7/zpa-connector-latest.rpm
- echo "deb https://dist.private.zscaler.com/apt stable main" | sudo tee /etc/apt/sources.list.d/zpa.list
- sudo apt update && sudo apt install -y zpa-connector

## Use Cases
- When replacing traditional VPN concentrators with application-level zero trust access
- When providing remote users secure access to internal applications without network-level connectivity
- When implementing least-privilege access where users only see authorized applications
- When needing to make internal applications invisible to unauthorized users and the internet
- When integrating ZTNA with existing SASE architecture using Zscaler Internet Access (ZIA)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Connector Configuration, CrowdStrike ZTA Integration, QRadar), Segment, Sentinel, ZPA Admin Portal, ZPA Log Streaming Service, Zscaler Client Connector

## Sources
- configuring-zscaler-private-access-for-ztna
