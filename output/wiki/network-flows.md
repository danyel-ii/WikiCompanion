# Network Flows

## Overview
Network Flows is a threat detection tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Network Flows is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Network Flows works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- lateral movement
- threat detection
- siem
- pass the hash

## Typical Workflow

## Use Cases
- Monitoring enterprise networks for post-compromise lateral movement patterns (pass-the-hash, RDP hopping, PSExec)
- Building SIEM detection rules and alerts for common MITRE ATT&CK lateral movement techniques (T1021, T1570)
- Investigating suspected breaches by analyzing authentication patterns and network connections between internal hosts
- Hunting for anomalous east-west traffic patterns that indicate an attacker pivoting through the network
- Validating that network segmentation and access controls effectively limit lateral movement paths
- Only investigating the single alert instead of tracing the full lateral movement chain across all hosts
- Relying solely on Windows Event Logs without correlating network flow data, missing lateral movement via tools that do not generate Windows events

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Connection Logs For Lateral Movement Analysis, And Service Creation Across The Enterprise, BloodHound, DCE RPC, Kerberos, Sigma, Splunk, Velociraptor

## Sources
- detecting-lateral-movement-in-network
