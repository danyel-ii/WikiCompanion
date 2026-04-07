# Scapy

## Overview
Scapy is a network forensics tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Scapy is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Scapy works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- scapy
- packet analysis
- network forensics
- protocol dissection
- pcap
- traffic analysis
- network security
- malware
- network analysis
- Wireshark
- C2 detection
- malware analysis

## Typical Workflow
- capinfos malware.pcap
- tshark -r malware.pcap -q -z io,phs
- tshark -r malware.pcap -q -z endpoints,ip
- tshark -r malware.pcap -q -z conv,tcp
- tshark -r malware.pcap -q -z dns,tree
- ping6 -c 3 ff02::1%eth0
- nmap -6 --script ipv6-multicast-mld-list -e eth0
- nmap -6 -sn --script targets-ipv6-multicast-echo -e eth0
- **Configure network tap**: Position the monitoring interface on the SPAN port mirroring the VLAN carrying Modbus TCP traffic between HMI/SCADA servers and PLCs. Verify bidirectional traffic capture with `tcpdump -i eth0 port 502 -c 100 -w modbus_capture.pcap`.
- Transaction Identifier (2 bytes): Matches requests to responses

## Use Cases
- When investigating security incidents that require analyzing network packets with scapy
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques
- Sandbox execution has captured a PCAP file and the network behavior needs detailed analysis
- Identifying the C2 protocol structure for writing network detection signatures
- Determining what data the malware exfiltrates and to which external infrastructure
- Analyzing DNS tunneling, domain generation algorithms (DGA), or fast-flux behavior
- Creating Suricata/Snort signatures based on observed malware network patterns
- Analyzing only the first few packets; some C2 protocols change behavior after initial handshake

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Wireshark, DNS, Suricata, Zeek, And 802.1Q Attacks With Both GUI And CLI Modes, And ASCII Modes. Used For Building Custom Modbus Clients, And Credential Capture, And Credentials From PCAP Files

## Sources
- analyzing-network-packets-with-scapy
- analyzing-network-traffic-of-malware
- exploiting-ipv6-vulnerabilities
- monitoring-scada-modbus-traffic-anomalies
- performing-arp-spoofing-attack-simulation
- performing-bandwidth-throttling-attack-simulation
- performing-packet-injection-attack
- performing-vlan-hopping-attack
