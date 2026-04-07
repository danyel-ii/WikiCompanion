# Ndpmon

## Overview
Ndpmon is a network security tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Ndpmon is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Ndpmon works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- ipv6
- slaac
- router advertisement
- dual stack security

## Typical Workflow
- ping6 -c 3 ff02::1%eth0
- nmap -6 --script ipv6-multicast-mld-list -e eth0
- nmap -6 -sn --script targets-ipv6-multicast-echo -e eth0

## Use Cases
- Testing whether dual-stack networks have consistent security controls for both IPv4 and IPv6 traffic
- Demonstrating risks from unmanaged IPv6 on networks where only IPv4 is officially supported
- Exploiting SLAAC and Router Advertisement mechanisms to perform man-in-the-middle attacks via IPv6
- Testing IPv6-aware firewall rules and IDS/IPS detection for IPv6-specific attack patterns
- Identifying IPv6 tunneling protocols (6to4, Teredo, ISATAP) that bypass IPv4-only security controls
- Flooding the network with Router Advertisements can cause instability on some devices
- mitm6 affects all Windows hosts on the VLAN, not just the target -- ensure scope covers all potentially affected hosts
- Some environments have IPv6-dependent services (SCCM, certain Azure services) that break when IPv6 is disrupted

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Flood Tools, Fake_router6, Mitm6, Nmap, Parasite6, Scapy, THC IPv6 Toolkit

## Sources
- exploiting-ipv6-vulnerabilities
