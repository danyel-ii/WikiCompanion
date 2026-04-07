# Beacon Detection

## Overview
Beacon Detection is a network analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Beacon Detection is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Beacon Detection works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- network analysis
- PCAP
- Wireshark
- C2 detection
- malware analysis

## Typical Workflow
- capinfos malware.pcap
- tshark -r malware.pcap -q -z io,phs
- tshark -r malware.pcap -q -z endpoints,ip
- tshark -r malware.pcap -q -z conv,tcp
- tshark -r malware.pcap -q -z dns,tree

## Use Cases
- Sandbox execution has captured a PCAP file and the network behavior needs detailed analysis
- Identifying the C2 protocol structure for writing network detection signatures
- Determining what data the malware exfiltrates and to which external infrastructure
- Analyzing DNS tunneling, domain generation algorithms (DGA), or fast-flux behavior
- Creating Suricata/Snort signatures based on observed malware network patterns
- Analyzing only the first few packets; some C2 protocols change behavior after initial handshake
- Confusing legitimate CDN or cloud traffic with C2 (validate destination IPs)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Credentials From PCAP Files, And Protocol Decoding, DNS, Images, NetworkMiner, Scapy, Ssl) From Live Or Captured Traffic, Suricata

## Sources
- analyzing-network-traffic-of-malware
