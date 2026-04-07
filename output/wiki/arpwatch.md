# Arpwatch

## Overview
Arpwatch is a network security tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Arpwatch is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Arpwatch works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- arp poisoning
- arp spoofing
- mitm
- dynamic arp inspection
- arpwatch
- network security
- man in the middle
- layer 2 security

## Typical Workflow
- sudo apt-get install -y arpwatch
- sudo vi /etc/default/arpwatch
- sudo systemctl enable arpwatch
- sudo systemctl start arpwatch
- cat /var/lib/arpwatch/arp.dat

## Use Cases
- When investigating security incidents that require detecting arp poisoning in network traffic
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- detecting-arp-poisoning-in-network-traffic
