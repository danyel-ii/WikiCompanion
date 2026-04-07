# Netflow

## Overview
Netflow is a traffic shaping tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Netflow is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Netflow works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- analyzing
- network
- flow
- data
- network security
- bandwidth throttling
- qos
- traffic shaping
- network resilience

## Typical Workflow
- iperf3 -c 10.10.20.10 -t 30 -P 4 -p 5201
- ping -c 100 10.10.20.10 | tail -1
- iperf3 -c 10.10.20.10 -u -b 100M -t 10 -p 5201

## Use Cases
- When investigating security incidents that require analyzing network flow data with netflow
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques
- Testing application resilience to degraded network conditions during authorized security assessments
- Validating QoS policies detect and mitigate unauthorized traffic shaping on the network
- Simulating network slowloris-style attacks that degrade bandwidth rather than causing complete outages
- Assessing the impact of bandwidth-based attacks on VoIP, video conferencing, and real-time applications
- Testing network monitoring tools' ability to detect abnormal bandwidth utilization patterns
- Forgetting to remove tc rules after testing, leaving bandwidth limitations in place on the test network

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Bettercap, Iperf3, Scapy, Tc

## Sources
- analyzing-network-flow-data-with-netflow
- performing-bandwidth-throttling-attack-simulation
